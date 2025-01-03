import {Routes} from '@angular/router';
import {UBICACION_ROUTE} from './modules/ubicacion/ubicacion.routes';

export const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./modules/ubicacion/ubicacion.routes').then(r => r.UBICACION_ROUTE),
  },
];
