import {Injectable} from '@angular/core';

import {ChampionDataService} from '../champion-data/champion-data.service';
import {Champion} from '../champion-data/models/internal/champion';

@Injectable({
  providedIn: 'root'
})
export class ChampionSelectService {
  private readonly champions: Readonly<Readonly<Champion>[]>;
  private readonly selected = new Set<Champion['name']>;

  public constructor(private data: ChampionDataService) {
    this.champions = data.champions;
  }

  public random(): Champion {
    const available = this.champions.filter((champion) => !this.selected.has(champion.name));
    return new Champion(available[Math.floor(Math.random() * available.length)]);
  }

  public select(champion: Champion): void {
    if (this.champions.some((aChampion) => champion.name === aChampion.name) && !this.selected.has(champion.name)) {
      this.selected.add(champion.name);
    }
  }

  public release(champion: Champion): void {
    if (this.champions.some((aChampion) => champion.name === aChampion.name) && this.selected.has(champion.name)) {
      this.selected.delete(champion.name);
    }
  }
}
