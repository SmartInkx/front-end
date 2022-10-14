import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { ModalTattoComponent } from '../modal-tattoo/modal-tatto.component';
import { ModalPercingComponent } from '../modal-percing/modal-percing.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
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
