import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TattooService {
  orcamentoTattooUrl = 'api/orcamento/uploadFile';
  loginUrl = 'api/orcamento/enviarOrcamentoTatuagem';

  constructor(private http: HttpClient) {}

  orcamentoTattoo(orcamento: any) {
    return this.http.post(this.loginUrl, orcamento);
  }

  uploadFile(file: File) {
    const formData: FormData = new FormData();
    console.log(file.name);
    console.log(file);
    formData.append('file', file);
    return this.http.post(this.orcamentoTattooUrl, formData);
  }
}
