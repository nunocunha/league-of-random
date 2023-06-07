import {APP_INITIALIZER, Provider} from '@angular/core';
import {firstValueFrom} from 'rxjs';

import {ChampionDataService} from './champion-data.service';

export const ChampionDataProvider: Provider = {
  provide: APP_INITIALIZER,
  multi: true,
  useFactory: (data: ChampionDataService) => () => firstValueFrom(data.getChampions()),
  deps: [
    ChampionDataService
  ]
};
