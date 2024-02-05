import { Routes } from '@angular/router';
import { BasicosComponent } from './template/basicos/basicos.component';
import { DinamicosComponent } from './template/dinamicos/dinamicos.component';
import { SwitchesComponent } from './template/switches/switches.component';
import { BasicosComponent as BasicosReactive } from './reactive/basicos/basicos.component';
import { DinamicosComponent as DinamicosReactive } from './reactive/dinamicos/dinamicos.component';
import { SwitchesComponent as SwitchesReactive } from './reactive/switches/switches.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';


export const routes: Routes = [
    { 
      path: 'template',
      loadChildren: () => import('./template/routes').then( mod => mod.routes)
    },
    { 
      path: 'reactive',
      loadChildren: () => import('./reactive/routes').then( mod => mod.routes)
      
    },
    {
      path: 'auth',
      loadChildren: () => import('./auth/routes').then( mod => mod.routes)
    },
    {
      path: 'countries',
      loadComponent: () => import('./countries/countries.component').then(mod => mod.CountriesComponent)
    },
    {
      path: '',
      redirectTo: 'template/basicos',
      pathMatch: 'full'
    },
    {
      path: '**',
      component: NotFoundComponent
    }
];
