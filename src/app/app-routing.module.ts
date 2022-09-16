import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { OrcamentoComponent } from './orcamento/orcamento.component';
import { SkullTatooComponent } from './skulltatoo/skulltatoo.component';
import { ContatoComponent } from './contato/contato.component';
import { ClientesComponent } from './clientes/clientes.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendamentoComponent } from './agendamento/agendamento.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: SkullTatooComponent },
  { path: 'agendamento', component: AgendamentoComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'skulltattoo', component: SkullTatooComponent },
  { path: 'orcamento', component: OrcamentoComponent},
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
