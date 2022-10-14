import { PiercingService } from './piercing.service';
import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './../modal/modal.component';


@Component({
  selector: 'app-piercing',
  templateUrl: './piercing.component.html',
  styleUrls: ['./piercing.component.scss'],
})
export class PiercingComponent implements OnInit {
  orcamentosPiercing: Array<any>;
  orcamento: any;

  constructor(
    private service: PiercingService,
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

  orcamentoPiercing(otp) {
    this.service.orcamentoPiercing(this.orcamento).subscribe((resposta) => {
      this.orcamentosPiercing.push(resposta);

      otp.reset();
    });
  }
}
