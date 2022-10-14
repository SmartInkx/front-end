import { ModalComponent } from './../modal/modal.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TattooService } from './tattoo.service';
import { DateAdapter } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-tattoo',
  templateUrl: './tattoo.component.html',
  styleUrls: ['./tattoo.component.scss'],
})
export class TattooComponent implements OnInit {
  orcamentos: Array<any>;
  orcamento: any;

  constructor(
    private service: TattooService,
    public route: Router,
    public dialog: MatDialog,
    private dateAdapter: DateAdapter<Date>
    ) {
      this.dateAdapter.setLocale('br');
    }

  ngOnInit(): void {
    this.orcamento = {};
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 7;
  };

  abreDialog() {
    const dialogRef = this.dialog.open(ModalComponent, {
      maxWidth: '25vw'
    });
    dialogRef.afterClosed()
  }
  public orcamentoTattoo(ott):void {
    this.service.orcamentoTattoo(this.orcamento).subscribe((resposta) => {
      this.orcamentos.push(resposta);
      ott.reset();
    });
  }
}
