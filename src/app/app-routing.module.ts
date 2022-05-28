import { OrcamentoComponent } from './orcamento/orcamento.component';
import { EngrenagemComponent } from './engrenagem/engrenagem.component';
import { ContatoComponent } from './contato/contato.component';
import { ClientesComponent } from './clientes/clientes.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgendamentoComponent } from './agendamento/agendamento.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: EngrenagemComponent },
  { path: 'agendamento', component: AgendamentoComponent },
  { path: 'clientes', component: ClientesComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'engrenagem', component: EngrenagemComponent },
  { path: 'orcamento', component: OrcamentoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
