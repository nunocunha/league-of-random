import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map, Observable, take, tap} from 'rxjs';

import {DataDragon} from './data-dragon';
import {ChampionMapper} from './mappers/champion.mapper';
import {ChampionListInterface} from './models/external/champion-list.interface';
import {Champion} from './models/internal/champion';

@Injectable({
  providedIn: 'root'
})
export class ChampionDataService {
  private _cache: Readonly<Readonly<Champion>[]> = [];

  public constructor(private http: HttpClient) {
  }

  public get cache(): Champion[] {
    return structuredClone(this._cache);
  }

  public getChampions(): Observable<Readonly<Readonly<Champion>[]>> {
    return this.http
               .get<ChampionListInterface>(`${DataDragon.BASE_URL}/data/en_US/champion.json`)
               .pipe(map(ChampionMapper.fromChampionListInterface), tap((response) => {
                 this._cache = response;
               }), take(1));
  }
}
