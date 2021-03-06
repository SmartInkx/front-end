import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PiercingService {
  orcamentoPiercingUrl = 'api/orcamento/enviarOrcamentoPiercing';

  constructor(private http: HttpClient) {}

  orcamentoPiercing(orcamento: any) {
    return this.http.post(this.orcamentoPiercingUrl, orcamento);
  }
}
