import { Finalizados } from './../finalizados/finalizados';
import { take, Observable } from 'rxjs';
import { AgendamentosTattoo, Estilo } from './agendamentosTattoo';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AgendamentosTattooService {
  api = `${environment.API}agendamentotatuagem`;
  apiListTrue = `${environment.API}agendamentotatuagem/pendente/true`;
  apiListFalse = `${environment.API}agendamentotatuagem/pendente/false`;
  apiStyle = `${environment.API}tipotatuagem`;

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  public showText(titulo: string, mensagem: string, tipo: string) {
    this.toastr.show(
      mensagem,
      titulo,
      { closeButton: true, progressBar: true },
      tipo
    );
  }

  public listarStyle(): Observable<Estilo[]> {
    return this.http.get<Estilo[]>(this.apiStyle)
  }

  public listarTattoo() {
    return this.http.get<AgendamentosTattoo[]>(this.apiListTrue);
  }

  public listarAll() {
    return this.http.get<Finalizados[]>(this.apiListFalse);
  }

  public listarTattooId(id: string) {
    return this.http.get<AgendamentosTattoo>(`${this.api}/${id}`).pipe(take(1));
  }

  public atualizarTatto(agendamentos: AgendamentosTattoo) {
    return this.http
      .put<AgendamentosTattoo>(`${this.api}/${agendamentos.id}`, agendamentos)
      .pipe(take(1));
  }

  public deleteTattoo(id) {
    return this.http.delete(`${this.api}/${id}`).pipe(take(1));
  }
}
