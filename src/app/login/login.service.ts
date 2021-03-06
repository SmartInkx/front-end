import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  loginUrl = 'api/cadastrar';

  constructor(private http: HttpClient) {}

  criar(contato: any) {
    return this.http.post(this.loginUrl, contato);
  }
}
