import { Routes } from '@angular/router';

//componentes
import { HabilidadesComponent } from './components/habilidades/habilidades.component';


export const routes: Routes = [
    {path: '', component: HabilidadesComponent, pathMatch: 'full'}
];
