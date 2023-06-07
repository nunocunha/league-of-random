import {CommonModule, NgOptimizedImage} from '@angular/common';
import {Component, OnDestroy} from '@angular/core';

import {Champion} from './services/champion-data/models/internal/champion';
import {ChampionSelectService} from './services/champion-select/champion-select.service';

@Component({
  selector: 'lr-champion',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage
  ],
  templateUrl: './champion.component.html',
  styleUrls: ['./champion.component.css']
})
export class ChampionComponent implements OnDestroy {
  public champion: Champion;

  public constructor(private champions: ChampionSelectService) {
    this.champion = this.champions.random();
    this.champions.select(this.champion);
  }

  public ngOnDestroy(): void {
    this.champions.release(this.champion);
  }
}
