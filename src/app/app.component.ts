import {CommonModule} from '@angular/common';
import {ApplicationRef, Component} from '@angular/core';

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
  public summoners = [''];

  public constructor(private app: ApplicationRef) {
    this.summoners = this.loadSummoners();
    this.validateButtons();
  }

  public add(): void {
    this.summoners.push('');
    this.validateButtons();
    this.saveSummoners(this.summoners);
  }

  public remove(): void {
    this.summoners.pop();
    this.validateButtons();
    this.saveSummoners(this.summoners);
  }

  public randomize(): void {
    this.summoners = [];
    this.app.tick();
    this.summoners = this.loadSummoners();
  }

  public valueChange(summoner: string, index: number): void {
    this.summoners[index] = summoner;
    this.saveSummoners(this.summoners);
  }

  public trackBy(index: number): number {
    return index;
  }

  private validateButtons(): void {
    this.canAdd = this.summoners.length < 5;
    this.canRemove = this.summoners.length > 1;
  }

  private saveSummoners(summoners: AppComponent['summoners']): void {
    window.localStorage.setItem('summoners', JSON.stringify(summoners));
  }

  private loadSummoners(): AppComponent['summoners'] {
    return JSON.parse(window.localStorage.getItem('summoners') ?? '[""]');
  }
}
