import {DataDragon} from '../data-dragon';
import {ChampionDataInterface} from '../models/external/champion-data.interface';
import {ChampionListInterface} from '../models/external/champion-list.interface';
import {Champion} from '../models/internal/champion';

export class ChampionMapper {
  private constructor() {
    throw new Error(`Static class is unable to be instantiated.`);
  }

  public static fromChampionDataInterface(input: ChampionDataInterface): Readonly<Champion> {
    return new Champion({
      name: input.name,
      image: `${DataDragon.BASE_URL}/img/champion/${input.image.full}`
    });
  }

  public static fromChampionListInterface(input: ChampionListInterface): Readonly<Readonly<Champion>[]> {
    return Object.values(input.data)
                 .map(ChampionMapper.fromChampionDataInterface);
  }
}
