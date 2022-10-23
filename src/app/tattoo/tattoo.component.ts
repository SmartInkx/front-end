import { ModalComponent } from './../modal/modal.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TattooService } from './tattoo.service';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Tattoo } from '../shared/Tattoo'

@Component({
  selector: 'app-tattoo',
  templateUrl: './tattoo.component.html',
  styleUrls: ['./tattoo.component.scss'],
})

export class TattooComponent implements OnInit {
  formTattoo: FormGroup;

  constructor(
    private service: TattooService,
    private FormBuilder: FormBuilder,
    public route: Router,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.createForm(new Tattoo());
  }

  public createForm(tattoo: Tattoo): void {
    this.formTattoo = this.FormBuilder.group({
      nome: [tattoo.nome, [Validators.required]],
      telefone: [tattoo.telefone, [Validators.required, Validators.minLength(11)]],
      localTatuagem: [tattoo.localTatuagem, [Validators.required]]
    })
  }

  public abreDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      maxWidth: '25vw'
    });
    dialogRef.afterClosed()
  }

  public onSubmit(): void {
    console.log(this.formTattoo.value);
    this.service.agendamentoTattoo(this.formTattoo.value).subscribe(
      success => this.abreDialog()
    );
  }
}
