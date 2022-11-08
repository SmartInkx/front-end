import { AgendamentosTattooComponent } from './dashboard/agendamentos-tattoo/agendamentos-tattoo.component';
// import { AuthGuard } from './login/shared/auth.guard';
import { AuthenticationComponent } from './login/authentication/authentication.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SkullTatooComponent } from './skulltatoo/skulltatoo.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { AgendamentosPiercingComponent } from './dashboard/agendamentos-piercing/agendamentos-piercing.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: SkullTatooComponent },
  { path: 'agendamento', component: AgendamentoComponent },
  { path: 'skulltattoo', component: SkullTatooComponent },
  { path: 'agendamentostattoo', component: AgendamentosTattooComponent },
  { path: 'agendamentospiercing', component: AgendamentosPiercingComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    // canActivate: [AuthGuard]
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
export class AppRoutingModule {}
