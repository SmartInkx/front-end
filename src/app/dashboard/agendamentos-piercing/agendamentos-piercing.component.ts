import { AgendamentosPiercing } from './agendamentosPiercing';
import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalPercingComponent } from 'src/app/modal-percing/modal-percing.component';
import { ModalTattoComponent } from 'src/app/modal-tattoo/modal-tatto.component';
import { AgendamentosPiercingService } from './agendamentos-piercing.service';

@Component({
  selector: 'app-agendamentos-piercing',
  templateUrl: './agendamentos-piercing.component.html',
  styleUrls: ['./agendamentos-piercing.component.scss'],
})
export class AgendamentosPiercingComponent implements OnInit {
  opened = false;
  panelOpenState = false;
  agendamentosPiercing: AgendamentosPiercing[];

  constructor(
    public dialog: MatDialog,
    private dateAdapter: DateAdapter<Date>,
    private service: AgendamentosPiercingService
  ) {
    this.dateAdapter.setLocale('br');
  }

  ngOnInit(): void {
    this.service.listarPiercing().subscribe(data => this.agendamentosPiercing = data);
  }

  abreDialog() {
    const dialogRef = this.dialog.open(ModalTattoComponent, {
      maxWidth: '100vw',
      maxHeight: '85vh',
    });
    dialogRef.afterClosed();
  }
  openDialog() {
    const dialogRef = this.dialog.open(ModalPercingComponent);
    dialogRef.afterClosed();
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 7;
  };
}
