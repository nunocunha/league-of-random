import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {timer} from 'rxjs';

import {ChampionComponent} from './components/champion/champion.component';
import {RoleComponent} from './components/role/role.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ChampionComponent,
    RoleComponent,
  ],
  selector: 'lr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public canAdd = false;
  public canRemove = false;
  public lanes: unknown[];

  public constructor() {
    this.lanes = Array.from({length: this.laneCountFromLocalStorage()});
    this.validateButtons();
  }

  public add(): void {
    this.lanes.push(undefined);
    this.validateButtons();
    window.localStorage.setItem('lanes', `${this.lanes.length}`);
  }

  public remove(): void {
    this.lanes.pop();
    this.validateButtons();
    window.localStorage.setItem('lanes', `${this.lanes.length}`);
  }

  public randomize(): void {
    const length = this.lanes.length;
    timer(0)
        .subscribe(() => this.lanes = [])
        .add();
    timer(0)
        .subscribe(() => this.lanes = Array.from({length}));
  }

  private validateButtons(): void {
    this.canAdd = this.lanes.length < 5;
    this.canRemove = this.lanes.length > 1;
  }

  private laneCountFromLocalStorage(): number {
    let value = Number.parseInt(window.localStorage.getItem('lanes') ?? '1', 10);

    if (value > 5) {
      value = 5;
    }

    if (value < 1) {
      value = 1;
    }

    return value;
  }
}
