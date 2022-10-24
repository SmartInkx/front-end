import { Piercing } from './../shared/Piercing';
import { PiercingService } from './piercing.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './../modal/modal.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-piercing',
  templateUrl: './piercing.component.html',
  styleUrls: ['./piercing.component.scss'],
})
export class PiercingComponent implements OnInit {
  formPiercing: FormGroup;

  constructor(
    private service: PiercingService,
    private FormBuilder: FormBuilder,
    public dialog: MatDialog,
    ) { }

  ngOnInit(): void {
    this.createForm(new Piercing());
  }

  public createForm(piercing: Piercing) {
    this.formPiercing = this.FormBuilder.group({
      nome: [piercing.nome, [Validators.required]],
      telefone: [piercing.telefone, [Validators.required, Validators.minLength(6)]],
      localPiercing: [piercing.localPiercing, [Validators.required]]
    })
  }

  abreDialog() {
    const dialogRef = this.dialog.open(ModalComponent, {
      maxWidth: '25vw'
    });
    dialogRef.afterClosed()
  }

  onSubmit() {
    console.log(this.formPiercing.value)
  }
}
