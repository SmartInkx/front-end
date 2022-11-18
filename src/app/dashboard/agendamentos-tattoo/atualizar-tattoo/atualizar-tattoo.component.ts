
import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalPiercingComponent } from 'src/app/modal-piercing/modal-piercing.component';
import { ModalTattooComponent } from 'src/app/modal-tattoo/modal-tattoo.component';
import { AgendamentosTattooService } from '../agendamentos-tattoo.service';
import { AgendamentosTattoo } from '../agendamentosTattoo';

@Component({
  selector: 'app-atualizar-tattoo',
  templateUrl: './atualizar-tattoo.component.html',
  styleUrls: ['./atualizar-tattoo.component.scss'],
})
export class AtualizarTattooComponent implements OnInit {
  opened = false;
  panelOpenState = false;
  agendamentosTattoo: AgendamentosTattoo;

  constructor(
    public dialog: MatDialog,
    private dateAdapter: DateAdapter<Date>,
    private service: AgendamentosTattooService,
    private router: Router,
    private activatedRouter: ActivatedRoute
  ) {
    this.dateAdapter.setLocale('br');
  }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.paramMap.get('id')
    this.service.listarTattooId(id).subscribe(tatoo => this.agendamentosTattoo = tatoo)
  }

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

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day !== 0 && day !== 7;
  };

  updateTatto(): void {
    this.service.atualizarTatto(this.agendamentosTattoo).subscribe(() => {
      this.service.showText(
        'SISTEMA',
        `Agendamento alterado com sucesso`,
        'toast-success'
      );
    })
    this.goBack();
  }

  goBack(): void {
    this.router.navigate(['/agendamentostattoo'])
  }
}
