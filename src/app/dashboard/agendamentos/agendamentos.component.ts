import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalPercingComponent } from 'src/app/modal-percing/modal-percing.component';
import { ModalTattoComponent } from 'src/app/modal-tattoo/modal-tatto.component';

@Component({
  selector: 'app-agendamentos',
  templateUrl: './agendamentos.component.html',
  styleUrls: ['./agendamentos.component.scss']
})
export class AgendamentosComponent implements OnInit {
  opened = false;
  panelOpenState = false;

  constructor(
    public dialog: MatDialog,
    private dateAdapter: DateAdapter<Date>
    ) {
      this.dateAdapter.setLocale('br');
    }

  ngOnInit(): void {
  }

  abreDialog() {
    const dialogRef = this.dialog.open(ModalTattoComponent, {
      maxWidth: '100vw',
      maxHeight: '85vh',
    });
    dialogRef.afterClosed()
  }
  openDialog() {
    const dialogRef = this.dialog.open(ModalPercingComponent);
    dialogRef.afterClosed()
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 7;
  };

}
