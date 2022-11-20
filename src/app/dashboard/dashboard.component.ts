import { LoginService } from './../login/login.service';
import { Component, OnInit } from '@angular/core';
import { ModalTattooComponent } from '../modal-tattoo/modal-tattoo.component';
import { ModalPiercingComponent } from '../modal-piercing/modal-piercing.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

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
    public route: Router,
    public serviceLogin: LoginService
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

  logout() {
    this.serviceLogin.removerTokenLocalStorage();
    this.route.navigate(['/home']);
  }
}
