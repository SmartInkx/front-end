import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(
    private router: Router,
    private service: LoginService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]],
    });
  }

  login() {
    const { email, senha } = this.form.value;
    this.form.reset();
    this.service.login(email, senha).subscribe(
      (res) => {
        this.service.showText(
          'SISTEMA',
          `Login efetuado com sucesso`,
          'toast-success'
        );
        this.router.navigate(['/dashboard']);
      },
      (err) => {
        this.service.showText(
          'SISTEMA',
          `Falha ao efetuar login, revise os dados`,
          'toast-error'
        );
      }
    );
  }

  logout() {
    this.form.reset();
    this.service.removerTokenLocalStorage();
    this.router.navigate(['/home']);
  }
}
