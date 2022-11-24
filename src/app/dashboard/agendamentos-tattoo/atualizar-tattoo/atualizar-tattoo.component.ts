import { LoginService } from './../../../login/login.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalPiercingComponent } from 'src/app/modal-piercing/modal-piercing.component';
import { ModalTattooComponent } from 'src/app/modal-tattoo/modal-tattoo.component';
import { AgendamentosTattooService } from '../agendamentos-tattoo.service';
import { AgendamentosTattoo, Estilo } from '../agendamentosTattoo';

@Component({
  selector: 'app-atualizar-tattoo',
  templateUrl: './atualizar-tattoo.component.html',
  styleUrls: ['./atualizar-tattoo.component.scss'],
})
export class AtualizarTattooComponent implements OnInit {
  opened = false;
  panelOpenState = false;
  agendamentosTattoo: AgendamentosTattoo;
  styles: Estilo[];

  constructor(
    public dialog: MatDialog,
    private service: AgendamentosTattooService,
    private serviceLogin: LoginService,
    private router: Router,
    private activatedRouter: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.paramMap.get('id')
    this.service.listarStyle().subscribe((style) => {
      this.styles = style
    })
    this.service.listarTattooId(id).subscribe((tatoo) => this.agendamentosTattoo = tatoo)
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

  updateTattoo(): void {
    const date = new Date(this.agendamentosTattoo.data)
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    this.agendamentosTattoo.data = `${day}-${month}-${year}`;
    // this.agendamentosTattoo.pendente = false;
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

  logout() {
    this.serviceLogin.removerTokenLocalStorage();
    this.router.navigate(['/home']);
  }

}
