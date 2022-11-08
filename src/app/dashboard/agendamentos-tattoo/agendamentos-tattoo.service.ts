import { AgendamentosTattoo } from './agendamentosTattoo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AgendamentosTattooService {
  api = 'api/agendamentotatuagem';

  constructor(private http: HttpClient) {}

  public listarTattoo() {
    return this.http.get<AgendamentosTattoo[]>(this.api);
  }
}
