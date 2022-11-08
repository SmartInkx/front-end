import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(
    private httpClient: HttpClient
  ) { }

  // public login(user: any) {
  //   return new Promise((resolve) => {
  //     window.localStorage.setItem('token', 'meu-token');
  //     resolve(true);
  //   })
  // }

  // public login(usuario: string, senha: string):Observable<any> {
  //   return this.httpClient.post(this.api, {usuario, senha}, {responseType: 'json'}).pipe(
  //     map((data) => this.setTokenLocalStorage(data))
  //   )
  // }

  // public getToken(): string | null {
  //   return localStorage.getItem(environment.token);
  // }

  // private setTokenLocalStorage(response: any){
  //   const {type, token, _} = response;
  //   localStorage.setItem(environment.token, token)
  // }

  // private removerTokenLocalStorage(): void {
  //   localStorage.removeItem(environment.token);
  // }
}
