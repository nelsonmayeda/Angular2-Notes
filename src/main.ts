import 'zone.js/dist/zone';
import 'reflect-metadata';
import 'es6-shim';

import { bootstrap }    from '@angular/platform-browser-dynamic';
import { AppComponent } from '../app/app.component';

import { provideRouter } from '@ngrx/router';
import {_routes} from '../app/routes'

bootstrap(AppComponent, [provideRouter(_routes)]);