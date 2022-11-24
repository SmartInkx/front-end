import { AgendamentosPiercing, Material } from './agendamentosPiercing';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';
import { Observable, take } from 'rxjs';
import { Finalizados } from '../finalizados/finalizados';

@Injectable({
  providedIn: 'root',
})
export class AgendamentosPiercingService {
  api = `${environment.API}agendamentopiercing`;
  apiListTrue = `${environment.API}agendamentopiercing/pendente/true`;
  apiListFalse = `${environment.API}agendamentopiercing/pendente/false`;
  apiMaterial = `${environment.API}materialpiercing`;

  constructor(private http: HttpClient, private toastr: ToastrService) { }

  showText(titulo: string, mensagem: string, tipo: string) {
    this.toastr.show(
      mensagem,
      titulo,
      { closeButton: true, progressBar: true },
      tipo
    );
  }

  public listarMaterial(): Observable<Material[]> {
    return this.http.get<Material[]>(this.apiMaterial)
  }

  public listarPiercing() {
    return this.http.get<AgendamentosPiercing[]>(this.apiListTrue);
  }

  public listarPiercingId(id: string) {
    return this.http.get<AgendamentosPiercing>(`${this.api}/${id}`).pipe(take(1));
  }

  public listarAll() {
    return this.http.get<Finalizados[]>(this.apiListFalse);
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
