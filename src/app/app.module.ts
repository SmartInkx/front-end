//COMPONENTES
import { AuthenticationComponent } from './login/authentication/authentication.component';
import { AgendamentosTattooComponent } from './dashboard/agendamentos-tattoo/agendamentos-tattoo.component';
import { AgendamentosPiercingComponent } from './dashboard/agendamentos-piercing/agendamentos-piercing.component';
import { AtualizarTattooComponent } from './dashboard/agendamentos-tattoo/atualizar-tattoo/atualizar-tattoo.component';
import { FinalizadosComponent } from './dashboard/finalizados/finalizados.component';
import { AtualizarPiercingComponent } from './dashboard/agendamentos-piercing/atualizar-piercing/atualizar-piercing.component';
import { AgendamentoComponent } from './agendamento/agendamento.component';
import { LoginComponent } from './login/login.component';
import { TattooComponent } from './tattoo/tattoo.component';
import { PiercingComponent } from './piercing/piercing.component';
import { ModalTattooComponent } from './modal-tattoo/modal-tattoo.component';
import { ModalPiercingComponent } from './modal-piercing/modal-piercing.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SkullTatooComponent } from './skulltatoo/skulltatoo.component';
import { DashboardComponent } from './dashboard/dashboard.component';
//MODULOS
import { AuthGuard } from './login/auth.guard';
import { AuthInterceptor } from './login/auth.interceptor';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { ToastrModule } from 'ngx-toastr';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatStepperModule } from '@angular/material/stepper';
import { MatExpansionModule } from '@angular/material/expansion';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMaskModule } from 'ngx-mask';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkullTatooComponent,
    LoginComponent,
    TattooComponent,
    PiercingComponent,
    ModalTattooComponent,
    ModalPiercingComponent,
    AgendamentoComponent,
    DashboardComponent,
    AuthenticationComponent,
    AgendamentosTattooComponent,
    AgendamentosPiercingComponent,
    AtualizarTattooComponent,
    AtualizarPiercingComponent,
    FinalizadosComponent,

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
    MatSelectModule,
    MatExpansionModule,
    MatPaginatorModule,
    MatTableModule,
    NgxMaskModule.forRoot(),
    ToastrModule.forRoot(),
    SweetAlert2Module.forRoot(),
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
