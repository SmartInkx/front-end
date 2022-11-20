//COMPONENTES
import { FinalizadosComponent } from './dashboard/finalizados/finalizados.component';
import { AtualizarTattooComponent } from './dashboard/agendamentos-tattoo/atualizar-tattoo/atualizar-tattoo.component';
import { AgendamentosTattooComponent } from './dashboard/agendamentos-tattoo/agendamentos-tattoo.component';
import { AuthenticationComponent } from './login/authentication/authentication.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SkullTatooComponent } from './skulltatoo/skulltatoo.component';
import { HomeComponent } from './home/home.component';
import { AtualizarPiercingComponent } from './dashboard/agendamentos-piercing/atualizar-piercing/atualizar-piercing.component';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { AgendamentosPiercingComponent } from './dashboard/agendamentos-piercing/agendamentos-piercing.component';
//MODULOS
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './login/auth.guard';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: SkullTatooComponent },
  { path: 'agendamento', component: AgendamentoComponent },
  { path: 'skulltattoo', component: SkullTatooComponent },
  {
    path: 'finalizados',
    canActivate: [AuthGuard],
    component: FinalizadosComponent
  },
  {
    path: 'agendamentostattoo',
    canActivate: [AuthGuard],
    component: AgendamentosTattooComponent
  },
  {
    path: 'agendamentostattoo/atualizartattoo/:id',
    canActivate: [AuthGuard],
    component: AtualizarTattooComponent,
  },
  {
    path: 'agendamentospiercing',
    canActivate: [AuthGuard],
    component: AgendamentosPiercingComponent
  },
  {
    path: 'agendamentospiercing/atualizarpiercing/:id',
    canActivate: [AuthGuard],
    component: AtualizarPiercingComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },

  {
    path: '',
    component: AuthenticationComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
