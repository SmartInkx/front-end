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
  uploadedImage: File;
  image: any;

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

  // onUploadImage(event) {
  //   this.uploadedImage = event.target.files[0];
  // }

  // imageUploadAction() {
  //   const imageFormData = new FormData();
  //   formData.append('file', this.onUploadedImage);
  // }
}
