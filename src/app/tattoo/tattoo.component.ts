import { Component, OnInit } from '@angular/core';
import { TattooService } from './tattoo.service';

@Component({
  selector: 'app-tattoo',
  templateUrl: './tattoo.component.html',
  styleUrls: ['./tattoo.component.scss'],
})
export class TattooComponent implements OnInit {
  orcamentos: Array<any>;
  orcamento: any;
  localUrl: any;
  file?: File;

  constructor(private service: TattooService) {}

  ngOnInit(): void {
    this.orcamento = {};
  }

  orcamentoTattoo(ott) {
    this.service.orcamentoTattoo(this.orcamento).subscribe((resposta) => {
      this.orcamentos.push(resposta);

      ott.reset();
    });
  }

  selectFile(event: any) {
    this.file = <File>event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.localUrl = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }

  uploadFile() {
    if (this.file != undefined) {
      this.service.uploadFile(this.file).subscribe((data) => {
        console.log(data);
        alert('Arquivo enviado com sucesso!');
      });
    } else {
      alert('Selecione um arquivo!');
    }
  }
}
