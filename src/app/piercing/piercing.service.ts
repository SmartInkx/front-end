import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PiercingService {

  api = 'api/agendamentopiercing/enviaragendamentopiercing';

  constructor(
    private http: HttpClient
    ) {}

    public agendamentoPiercing(piercing) {
      return this.http.post(this.api, piercing).pipe(take(1));
    }
}
