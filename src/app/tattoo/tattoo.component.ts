import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';
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

  constructor(
    private service: TattooService,
    public route: Router
    ) {}

  ngOnInit(): void {
    this.orcamento = {};
  }

  public cadastroSuccess(): void {
    this.route.navigate
  }
  public orcamentoTattoo(ott):void {
    this.service.orcamentoTattoo(this.orcamento).subscribe((resposta) => {
      this.orcamentos.push(resposta);

      ott.reset();
    });
  }
}
