import { LoginService } from './../../../login/login.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalPiercingComponent } from 'src/app/modal-piercing/modal-piercing.component';
import { ModalTattooComponent } from 'src/app/modal-tattoo/modal-tattoo.component';
import { AgendamentosPiercingService } from '../agendamentos-piercing.service';
import { AgendamentosPiercing, Material } from '../agendamentosPiercing';


@Component({
  selector: 'app-atualizar-piercing',
  templateUrl: './atualizar-piercing.component.html',
  styleUrls: ['./atualizar-piercing.component.scss']
})
export class AtualizarPiercingComponent implements OnInit {
  opened = false;
  panelOpenState = false;
  agendamentosPiercing: AgendamentosPiercing;
  material: Material[];

  constructor(
    public dialog: MatDialog,
    private service: AgendamentosPiercingService,
    private serviceLogin: LoginService,
    private router: Router,
    private activatedRouter: ActivatedRoute,) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.paramMap.get('id')
    this.service.listarMaterial().subscribe((material) => {
      this.material = material
    });
    this.service.listarPiercingId(id).subscribe(tatoo => this.agendamentosPiercing = tatoo)
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

  updatePiercing(): void {
    const date = new Date(this.agendamentosPiercing.data)
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    this.agendamentosPiercing.data = `${day}-${month}-${year}`;
    this.agendamentosPiercing.pendente = false;
    this.service.atualizarPiercing(this.agendamentosPiercing).subscribe(() => {
      this.service.showText(
        'SISTEMA',
        `Agendamento alterado com sucesso`,
        'toast-success'
      );
    })
    this.goBack();
  }

  goBack(): void {
    this.router.navigate(['/agendamentospiercing'])
  }

  logout() {
    this.serviceLogin.removerTokenLocalStorage();
    this.router.navigate(['/home']);
  }
}
