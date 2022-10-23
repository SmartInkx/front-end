import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TattooService {
  loginUrl = 'api/orcamento/enviarOrcamentoTatuagem';

  constructor(
    private http: HttpClient
    ) {}

  public agendamentoTattoo(tattoo) {
    return this.http.post(this.loginUrl, tattoo).pipe(take(1));
  }
}
