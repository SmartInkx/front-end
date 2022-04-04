import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  contatos: Array<any>;
  contato: any;

  constructor(private service: LoginService) {}

  ngOnInit(): void {
    this.contato = {};
  }
  criar(frm) {
    this.service.criar(this.contato).subscribe((resposta) => {
      this.contatos.push(resposta);

      frm.reset();
    });
  }
}
