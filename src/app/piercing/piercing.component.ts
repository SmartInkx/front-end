import { PiercingService } from './piercing.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piercing',
  templateUrl: './piercing.component.html',
  styleUrls: ['./piercing.component.scss'],
})
export class PiercingComponent implements OnInit {
  orcamentosPiercing: Array<any>;
  orcamento: any;

  constructor(private service: PiercingService) {}

  ngOnInit(): void {
    this.orcamento = {};
  }

  orcamentoPiercing(otp) {
    this.service.orcamentoPiercing(this.orcamento).subscribe((resposta) => {
      this.orcamentosPiercing.push(resposta);

      otp.reset();
    });
  }
}
