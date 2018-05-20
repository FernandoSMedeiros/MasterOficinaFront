import { Routes, RouterModule } from '@angular/router' 
import { ModuleWithProviders } from '@angular/compiler/src/core';

import { RelatoriosComponent } from './relatorios/relatorios.component';
import { OrdemServicoComponent } from './ordemservico/ordemservico.component';
import { HomeComponent } from './home/home.component';


const APP_ROUTES: Routes = [
    {path: '', component: HomeComponent},
    {path: 'ordemservico', component: OrdemServicoComponent},
    {path: 'relatorios', component: RelatoriosComponent}
]

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);