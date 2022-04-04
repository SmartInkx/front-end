import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EngrenagemService {

  usuariosUrl = 'https://smartink.herokuapp.com/usuarios/all';
  loginUrl = 'https://smartink.herokuapp.com/usuarios/cadastrar';

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(`${this.usuariosUrl}`);
  }

  criar(contato: any){
    return this.http.post(this.loginUrl, contato);
  }
}
