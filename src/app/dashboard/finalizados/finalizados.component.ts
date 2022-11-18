import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ModalPiercingComponent } from 'src/app/modal-piercing/modal-piercing.component';
import { ModalTattooComponent } from 'src/app/modal-tattoo/modal-tattoo.component';
import { AgendamentosTattoo } from '../agendamentos-tattoo/agendamentosTattoo';
import { Finalizados } from './finalizados';

@Component({
  selector: 'app-finalizados',
  templateUrl: './finalizados.component.html',
  styleUrls: ['./finalizados.component.scss'],
})
export class FinalizadosComponent implements OnInit {
  opened = false;
  panelOpenState = false;
  // agendamentosTattoo: AgendamentosTattoo[];

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

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

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
}
