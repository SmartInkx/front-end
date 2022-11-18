import { Router, ActivatedRoute } from '@angular/router';
import { AgendamentosTattooService } from './agendamentos-tattoo.service';
import { Component, OnInit } from '@angular/core';
import { DateAdapter } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalPiercingComponent } from 'src/app/modal-piercing/modal-piercing.component';
import { ModalTattooComponent } from 'src/app/modal-tattoo/modal-tattoo.component';
import { AgendamentosTattoo } from './agendamentosTattoo';

@Component({
  selector: 'app-agendamentos-tattoo',
  templateUrl: './agendamentos-tattoo.component.html',
  styleUrls: ['./agendamentos-tattoo.component.scss'],
})
export class AgendamentosTattooComponent implements OnInit {
  opened = false;
  panelOpenState = false;
  agendamentosTattoo: AgendamentosTattoo[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public dialog: MatDialog,
    private dateAdapter: DateAdapter<Date>,
    private service: AgendamentosTattooService
  ) {
    this.dateAdapter.setLocale('br');
  }

  ngOnInit(): void {
    this.onList();
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

  onList(): void {
    this.service
      .listarTattoo()
      .subscribe((data) => (this.agendamentosTattoo = data));
  }

  onEdit(id) {
    this.service.atualizarTatto(id);
    this.router.navigate(['atualizartattoo', id], { relativeTo: this.route });
  }
  
 //verificar onList
  onDelete(agendamentos: AgendamentosTattoo): void {
    this.service.deleteTattoo(agendamentos.id).subscribe(() => {
      this.service.showText(
        'SISTEMA',
        `Agendamento excluído com sucesso`,
        'toast-error'
      );
    });
    this.onList();
  }
}
