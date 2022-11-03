import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TattooService {
  api = 'api/agendamentotatuagem/enviaragendamentotatuagem';

  constructor(
    private http: HttpClient
    ) {}

  public agendamentoTattoo(tattoo) {
    return this.http.post(this.api, tattoo).pipe(take(1));
  }
}
