import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalPercingComponent } from '../modal-percing/modal-percing.component';
import { ModalTattoComponent } from '../modal-tattoo/modal-tatto.component';

@Component({
  selector: 'app-orcamento',
  templateUrl: './orcamento.component.html',
  styleUrls: ['./orcamento.component.scss'],
})
export class OrcamentoComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  abreDialog() {
    const dialogRef = this.dialog.open(ModalTattoComponent);

    dialogRef.afterClosed()
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalPercingComponent);

    dialogRef.afterClosed()
  }

}

