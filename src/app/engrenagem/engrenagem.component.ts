import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-engrenagem',
  templateUrl: './engrenagem.component.html',
  styleUrls: ['./engrenagem.component.scss']
})

export class EngrenagemComponent implements OnInit {


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(ModalComponent);

    // dialogRef.afterClosed().subscribe(result => {});
  }
}
