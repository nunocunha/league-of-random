import {ChampionInterface} from './champion.interface';

export interface ChampionListInterface {
  type: string;
  format: string;
  version: string;
  data: ChampionInterface;
}
