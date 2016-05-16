import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from './app.component';

import { provideRouter } from '@ngrx/router';
import {_routes} from './routes'

bootstrap(AppComponent, [provideRouter(_routes)]);