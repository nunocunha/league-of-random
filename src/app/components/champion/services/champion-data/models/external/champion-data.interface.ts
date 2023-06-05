import {ChampionImageInterface} from './champion-image.interface';
import {ChampionInfoInterface} from './champion-info.interface';
import {ChampionStatsInterface} from './champion-stats.interface';

export interface ChampionDataInterface {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: ChampionInfoInterface;
  image: ChampionImageInterface;
  tags: string[];
  partype: string;
  stats: ChampionStatsInterface;
}
