import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';
import { ModalPiercingComponent } from 'src/app/modal-piercing/modal-piercing.component';
import { ModalTattooComponent } from 'src/app/modal-tattoo/modal-tattoo.component';
import { AgendamentosPiercingService } from '../../agendamentos-piercing/agendamentos-piercing.service';
import { Finalizados } from '../finalizados';

@Component({
  selector: 'app-finalizados-piercing',
  templateUrl: './finalizados-piercing.component.html',
  styleUrls: ['./finalizados-piercing.component.scss']
})
export class FinalizadosPiercingComponent implements OnInit {
  opened = false;
  panelOpenState = false;
  finalizados: Finalizados[];
  displayedColumns: string[] = [
    'nome_cliente',
    'nome_profissional',
    'data',
    'telefone',
    'valor',
  ];

  constructor(public dialog: MatDialog, private serviceLogin: LoginService, public router: Router,
    private service: AgendamentosPiercingService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(): void {
    this.service
      .listarAll()
      .subscribe((data) => (this.finalizados = data));
  }

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
