import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  api = `${environment.API}usuarios/logar`;

  constructor(private httpClient: HttpClient, private toastr: ToastrService) {}

  public login(email: string, senha: string) {
    return this.httpClient
      .post(this.api, { email, senha }, { responseType: 'json' })
      .pipe(map((data) => this.setTokenLocalStorage(data)),
      catchError((err) => {
        this.removerTokenLocalStorage();
        throw 'Falha ao efetuar login'
      })
    )
  }

  public getToken(): string | null {
    return localStorage.getItem(environment.token);
  }

  private setTokenLocalStorage(response): void {
    const { type, token, _ } = response;
    localStorage.setItem(environment.token, token);
  }

  public removerTokenLocalStorage(): void {
    localStorage.removeItem(environment.token);
  }

  public showText(titulo: string, mensagem: string, tipo: string) {
    this.toastr.show(
      mensagem,
      titulo,
      { closeButton: true, progressBar: true },
      tipo
    );
  }
}
