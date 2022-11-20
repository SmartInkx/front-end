import { AgendamentosPiercing } from './agendamentosPiercing';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AgendamentosPiercingService {
  api = `${environment.API}agendamentopiercing`;

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  showText(titulo: string, mensagem: string, tipo: string) {
    this.toastr.show(
      mensagem,
      titulo,
      { closeButton: true, progressBar: true },
      tipo
    );
  }

  public listarPiercing() {
    return this.http.get<AgendamentosPiercing[]>(this.api);
  }

  public listarPiercingId(id: string) {
    return this.http.get<AgendamentosPiercing>(`${this.api}/${id}`).pipe(take(1));
  }

  public atualizarPiercing(agendamentos: AgendamentosPiercing) {
    return this.http
      .put<AgendamentosPiercing>(`${this.api}/${agendamentos.id}`, agendamentos)
      .pipe(take(1));
  }

  public deletePiercing(id) {
    return this.http.delete(`${this.api}/${id}`).pipe(take(1));
  }
}
