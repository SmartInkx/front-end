import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { SkullTatooComponent } from './skulltatoo/skulltatoo.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendamentoComponent } from './agendamento/agendamento.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: SkullTatooComponent },
  { path: 'agendamento', component: AgendamentoComponent },
  { path: 'skulltattoo', component: SkullTatooComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
