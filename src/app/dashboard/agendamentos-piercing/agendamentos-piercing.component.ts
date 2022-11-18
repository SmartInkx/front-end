import { AgendamentosPiercing } from './agendamentosPiercing';
import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalPiercingComponent } from 'src/app/modal-piercing/modal-piercing.component';
import { ModalTattooComponent } from 'src/app/modal-tattoo/modal-tattoo.component';
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

  onList(): void {
    this.service
      .listarPiercing()
      .subscribe((data) => (this.agendamentosPiercing = data));
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 7;
  };

  onDelete(agendamentos: AgendamentosPiercing): void {
    this.service.deletePiercing(agendamentos.id).subscribe(() => {
      this.service.showText(
        'SISTEMA',
        `Agendamento excluído com sucesso`,
        'toast-error'
      );
    });
    this.onList();
  }
}
