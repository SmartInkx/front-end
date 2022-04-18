import { Component, OnInit } from '@angular/core';
import { TattooService } from './tattoo.service';

@Component({
  selector: 'app-tattoo',
  templateUrl: './tattoo.component.html',
  styleUrls: ['./tattoo.component.scss']
})
export class TattooComponent implements OnInit {
  orcamentos: Array<any>;
  orcamento: any

  constructor(private service: TattooService) { }

  ngOnInit(): void {
    this.orcamento = {};
  }

  orcamentoTattoo(ott){
    this.service.orcamentoTattoo(this.orcamento).subscribe((resposta) => {
      this.orcamentos.push(resposta);

      ott.reset();
    });
  }

  uploadImage(event) {
    const imagem = event.target.files[0];
    const formData = new FormData();
    formData.append('imagem', imagem);
  }
}



