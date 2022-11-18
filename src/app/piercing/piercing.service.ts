import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class PiercingService {

  api = `${environment.API}agendamentopiercing/enviaragendamentopiercing`;

  constructor(
    private http: HttpClient,
    private toastr: ToastrService
    ) {}

    public showText(titulo: string, mensagem: string, tipo: string) {
      this.toastr.show(
        mensagem,
        titulo,
        { closeButton: true, progressBar: true },
        tipo
      );
    }

    public agendamentoPiercing(piercing) {
      return this.http.post(this.api, piercing).pipe(take(1));
    }
}
