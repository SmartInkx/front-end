import { OrcamentoComponent } from './orcamento/orcamento.component';
import { EngrenagemComponent } from './engrenagem/engrenagem.component';
import { ContatoComponent } from './contato/contato.component';
import { ClientesComponent } from './clientes/clientes.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', component: HomeComponent },
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
