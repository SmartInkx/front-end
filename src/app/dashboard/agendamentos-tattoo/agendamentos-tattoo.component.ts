import { AgendamentosTattooService } from './agendamentos-tattoo.service';
import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalPercingComponent } from 'src/app/modal-percing/modal-percing.component';
import { ModalTattoComponent } from 'src/app/modal-tattoo/modal-tatto.component';
import { AgendamentosTattoo } from './agendamentosTattoo';

@Component({
  selector: 'app-agendamentos-tattoo',
  templateUrl: './agendamentos-tattoo.component.html',
  styleUrls: ['./agendamentos-tattoo.component.scss'],
})
export class AgendamentosTattooComponent implements OnInit {
  opened = false;
  panelOpenState = false;
  agendamentosTattoo: AgendamentosTattoo[];

  constructor(
    public dialog: MatDialog,
    private dateAdapter: DateAdapter<Date>,
    private service: AgendamentosTattooService
  ) {
    this.dateAdapter.setLocale('br');
  }

  ngOnInit(): void {
    this.service.listarTattoo().subscribe(data => this.agendamentosTattoo = data);
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
