import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AgendamentosTattoo } from '../agendamentos-tattoo/agendamentosTattoo';

@Injectable({
  providedIn: 'root'
})
export class FinalizadosService {
  api = 'api/agendamentotatuagem';

  constructor(
    private http: HttpClient,
  ) { }

  public listarServicos() {
    return this.http.get<AgendamentosTattoo[]>(this.api);
  }

}
