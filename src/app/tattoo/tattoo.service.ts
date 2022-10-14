import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TattooService {
  loginUrl = 'api/orcamento/enviarOrcamentoTatuagem';

  constructor(private http: HttpClient) {}

  orcamentoTattoo(orcamento: any) {
    return this.http.post(this.loginUrl, orcamento);
  }
}
