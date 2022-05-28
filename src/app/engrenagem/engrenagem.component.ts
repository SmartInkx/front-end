import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-engrenagem',
  templateUrl: './engrenagem.component.html',
  styleUrls: ['./engrenagem.component.scss'],
})
export class EngrenagemComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog() {
    const dialogRef = this.dialog.open(ModalComponent);
    dialogRef.afterClosed();
  }

  banneSlider: any = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 100,
    navText: [''],
    responsive: {
      0: {
        items: 1
      },
      350: {
        items: 1
      },
      540: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: false
  }
}
