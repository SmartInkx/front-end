import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatExpansionModule } from '@angular/material/expansion';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SkullTatooComponent } from './skulltatoo/skulltatoo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ModalComponent } from './modal/modal.component';
import { TattooComponent } from './tattoo/tattoo.component';
import { PiercingComponent } from './piercing/piercing.component';
import { ModalTattoComponent } from './modal-tattoo/modal-tatto.component';
import { ModalPercingComponent } from './modal-percing/modal-percing.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { RouterModule, Routes } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMaskModule } from 'ngx-mask';
import { AuthenticationComponent } from './login/authentication/authentication.component';
import { AgendamentosTattooComponent } from './dashboard/agendamentos-tattoo/agendamentos-tattoo.component';
import { AgendamentosPiercingComponent } from './dashboard/agendamentos-piercing/agendamentos-piercing.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkullTatooComponent,
    LoginComponent,
    ModalComponent,
    TattooComponent,
    PiercingComponent,
    ModalTattoComponent,
    ModalPercingComponent,
    AgendamentoComponent,
    DashboardComponent,
    AuthenticationComponent,
    AgendamentosTattooComponent,
    AgendamentosPiercingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatMenuModule,
    MatButtonToggleModule,
    MatIconModule,
    MatToolbarModule,
    RouterModule,
    CarouselModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatStepperModule,
    MatExpansionModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
