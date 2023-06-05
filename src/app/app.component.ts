import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';
import {timer} from 'rxjs';

import {ChampionComponent} from './components/champion/champion.component';
import {RoleComponent} from './components/role/role.component';
import {SummonerComponent} from './components/summoner/summoner.component';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    ChampionComponent,
    RoleComponent,
    SummonerComponent,
  ],
  selector: 'lr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public canAdd = false;
  public canRemove = false;
  public summoners: string[] = [];

  public constructor() {
    this.loadSummoners();
    this.validateButtons();
  }

  public add(): void {
    this.summoners.push('');
    this.validateButtons();
    this.saveSummoners();
  }

  public remove(): void {
    this.summoners.pop();
    this.validateButtons();
    this.saveSummoners();
  }

  public randomize(): void {
    timer(0)
        .subscribe(() => this.summoners = [])
        .add();
    timer(0)
        .subscribe(() => this.loadSummoners());
  }

  public value(event: string, index: number): void {
    this.summoners[index] = event;
    this.saveSummoners();
  }

  public trackBy(index: number): number {
    return index;
  }

  private validateButtons(): void {
    this.canAdd = this.summoners.length < 5;
    this.canRemove = this.summoners.length > 1;
  }

  private saveSummoners(): void {
    window.localStorage.setItem('summoners', JSON.stringify(this.summoners));
  }

  private loadSummoners(): void {
    this.summoners = JSON.parse(window.localStorage.getItem('summoners') ?? '[]');
  }
}
