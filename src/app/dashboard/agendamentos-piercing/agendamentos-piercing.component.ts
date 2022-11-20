import { LoginService } from './../../login/login.service';
import { AgendamentosPiercing } from './agendamentosPiercing';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalPiercingComponent } from 'src/app/modal-piercing/modal-piercing.component';
import { ModalTattooComponent } from 'src/app/modal-tattoo/modal-tattoo.component';
import { AgendamentosPiercingService } from './agendamentos-piercing.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-agendamentos-piercing',
  templateUrl: './agendamentos-piercing.component.html',
  styleUrls: ['./agendamentos-piercing.component.scss'],
})
export class AgendamentosPiercingComponent implements OnInit {
  opened = false;
  panelOpenState = false;
  agendamentosPiercing: AgendamentosPiercing[];

  constructor(
    public dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private service: AgendamentosPiercingService,
    private serviceLogin: LoginService
  ) { }

  ngOnInit(): void {
    this.service.listarPiercing().subscribe(data => this.agendamentosPiercing = data);
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
      .listarPiercing()
      .subscribe((data) => (this.agendamentosPiercing = data));
  }

  onEdit(id) {
    this.service.atualizarPiercing(id);
    this.router.navigate(['atualizarpiercing', id], { relativeTo: this.route });
  }

  onDelete(agendamentos: AgendamentosPiercing): void {
    this.service.deletePiercing(agendamentos.id).subscribe(() => {
      this.service.showText(
        'SISTEMA',
        `Agendamento excluído com sucesso`,
        'toast-error'
      );
    });
    this.onList();
  }

  logout() {
    this.serviceLogin.removerTokenLocalStorage();
    this.router.navigate(['/home']);
  }
}
