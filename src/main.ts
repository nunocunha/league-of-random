import {provideHttpClient} from '@angular/common/http';
import {bootstrapApplication} from '@angular/platform-browser';

import {AppComponent} from './app/app.component';
import {ChampionDataProvider} from './app/components/champion/services/champion-data/champion-data.provider';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    ChampionDataProvider
  ]
})
    .catch((err) => console.error(err));
