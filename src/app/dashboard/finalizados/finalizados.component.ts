import { Router } from '@angular/router';
import { LoginService } from './../../login/login.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalPiercingComponent } from 'src/app/modal-piercing/modal-piercing.component';
import { ModalTattooComponent } from 'src/app/modal-tattoo/modal-tattoo.component';
import { Finalizados } from './finalizados';

@Component({
  selector: 'app-finalizados',
  templateUrl: './finalizados.component.html',
  styleUrls: ['./finalizados.component.scss'],
})
export class FinalizadosComponent implements OnInit {
  opened = false;
  panelOpenState = false;
  finalizados: Finalizados[] = [
    {
      id: 1,
      data: '15/11/2022',
      horario: '15:00',
      tipo_do_servico: 'Tatuagem',
      nome_cliente: 'Davi Soares',
      nome_profissional: 'Kit',
      telefone: '11982125779',
      valor: '50,00',
    },
  ];

  displayedColumns: string[] = [
    'id',
    'nome_cliente',
    'nome_profissional',
    'data',
    'tipo_do_servico',
    'telefone',
    'valor',
  ];

  constructor(public dialog: MatDialog, private serviceLogin: LoginService, public router: Router) { }

  ngOnInit(): void { }

  abreDialog() {
    const dialogRef = this.dialog.open(ModalTattooComponent, {
      maxWidth: '100vw',
      maxHeight: '85vh',
    });
    dialogRef.afterClosed();
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalPiercingComponent);
    dialogRef.afterClosed();
  }

  logout() {
    this.serviceLogin.removerTokenLocalStorage();
    this.router.navigate(['/home']);
  }
}
