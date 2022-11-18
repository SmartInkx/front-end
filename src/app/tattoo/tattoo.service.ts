import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TattooService {
  api = `${environment.API}agendamentotatuagem/enviaragendamentotatuagem`;

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  public showText(titulo: string, mensagem: string, tipo: string) {
    this.toastr.show(
      mensagem,
      titulo,
      { closeButton: true, progressBar: true },
      tipo
    );
  }

  public agendamentoTattoo(tattoo) {
    return this.http.post(this.api, tattoo).pipe(take(1));
  }
}
