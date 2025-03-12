import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { HistoricoComponent } from './historico/historico.component';

const routes: Routes = [
    { path: 'inicio', component: InicioComponent }, // Rota para o Início
    {path: 'histórico', component: HistoricoComponent},
    { path: '', redirectTo: '/inicio', pathMatch: 'full' }, // Rota padrão (redireciona para Início)
    { path: '**', redirectTo: '/inicio' } // Rota de fallback (página não encontrada)
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }