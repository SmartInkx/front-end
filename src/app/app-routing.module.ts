import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SkullTatooComponent } from './skulltatoo/skulltatoo.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { AgendamentosComponent } from './dashboard/agendamentos/agendamentos.component';
import { FinalizadosComponent } from './dashboard/finalizados/finalizados.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: SkullTatooComponent },
  { path: 'agendamento', component: AgendamentoComponent },
  { path: 'skulltattoo', component: SkullTatooComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'agendamentos', component: AgendamentosComponent },
  { path: 'finalizados', component: FinalizadosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
