import { AgendamentosPiercing } from './agendamentosPiercing';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AgendamentosPiercingService {
  api = 'api/agendamentopiercing';

  constructor(private http: HttpClient) {}

  public listarPiercing() {
    return this.http.get<AgendamentosPiercing[]>(this.api);
  }
}
