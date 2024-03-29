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
      nome_cliente: [tattoo.nome_cliente, [Validators.required]],
      telefone: [tattoo.telefone, [Validators.required, Validators.minLength(11)]],
      local_tatuagem: [tattoo.local_tatuagem, [Validators.required]]
    })
  }

  public onSubmit(): void {
    console.log(this.formTattoo.value);
    this.service.agendamentoTattoo(this.formTattoo.value).subscribe(
      success => this.service.showText(
      'Obrigado',
      `Agendamento solicitado com sucesso`,
      'toast-success')
    );
  }
}
