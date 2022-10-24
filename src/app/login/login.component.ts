import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  form: UntypedFormGroup;

  constructor(
    private router: Router,
    private authService: AuthService,
    private formBuilder: UntypedFormBuilder,
    ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]]
    });
  }

  login() {
    this.router.navigate(["/dashboard"]);
    console.log(this.form)
  }
}
