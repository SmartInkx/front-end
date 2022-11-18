import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  api = `${environment.API}usuarios/cadastrar`;

  constructor(
    private httpClient: HttpClient
  ) { }

  public login(email: string, senha: string) {
    return this.httpClient.post(this.api, {email, senha}, {responseType: 'json'}).pipe(
      map((data) => this.setTokenLocalStorage(data))
    )
  }

  public getToken(): string | null {
    return localStorage.getItem(environment.token);
  }

  private setTokenLocalStorage(response: any){
    const {type, token, _} = response;
    localStorage.setItem(environment.token, token)
  }

  private removerTokenLocalStorage(): void {
    localStorage.removeItem(environment.token);
  }
}
