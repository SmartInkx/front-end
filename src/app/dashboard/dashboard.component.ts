import { Component, OnInit } from '@angular/core';
import { ModalTattooComponent } from '../modal-tattoo/modal-tattoo.component';
import { ModalPiercingComponent } from '../modal-piercing/modal-piercing.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  opened = false;
  panelOpenState = false;

  constructor(
    public dialog: MatDialog,
  ) { }

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
