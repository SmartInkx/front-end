import { EngrenagemService } from './engrenagem.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-engrenagem',
  templateUrl: './engrenagem.component.html',
  styleUrls: ['./engrenagem.component.scss']
})
export class EngrenagemComponent implements OnInit {

  login: Array<any>;

  constructor(private engrenagemService: EngrenagemService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.engrenagemService.listar().subscribe(dados => this.login = dados);
  }
}

export class Dialog {
  constructor(public dialog: MatDialog){}
  openDialog() {
    const dialogRef = this.dialog.open(Dialogo);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
export class Dialogo{}

