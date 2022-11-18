import { LoginService } from './login.service';
import { Router } from '@angular/router';
import { AuthService } from './authentication/auth.service';
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
    private formBuilder: FormBuilder,
    ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]
    });
  }

  login() {
    const {email, senha} = this.form.value;
    this.form.reset();
    this.service.login(email, senha).subscribe()
    this.router.navigate(["/dashboard"]);  }
}
