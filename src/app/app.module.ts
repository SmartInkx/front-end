import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ContatoComponent } from './contato/contato.component';
import { EngrenagemComponent } from './engrenagem/engrenagem.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EngrenagemService } from './engrenagem/engrenagem.service';
import { LoginComponent } from './login/login.component';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientesComponent,
    ContatoComponent,
    EngrenagemComponent,
    LoginComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    MatButtonModule,
  ],
  providers: [EngrenagemService],
  bootstrap: [AppComponent],
})
export class AppModule {}
