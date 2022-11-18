import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ModalTattooComponent } from '../modal-tattoo/modal-tattoo.component';
import { ModalPiercingComponent } from '../modal-piercing/modal-piercing.component';

@Component({
  selector: 'app-agendamento',
  templateUrl: './agendamento.component.html',
  styleUrls: ['./agendamento.component.scss']
})
export class AgendamentoComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  abreDialog() {
    const dialogRef = this.dialog.open(ModalTattooComponent, {
      maxWidth: '100vw',
      maxHeight: '85vh',
    });
    dialogRef.afterClosed()
  }
  openDialog() {
    const dialogRef = this.dialog.open(ModalPiercingComponent);
    dialogRef.afterClosed()
  }
}
