import { EngrenagemService } from './engrenagem.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-engrenagem',
  templateUrl: './engrenagem.component.html',
  styleUrls: ['./engrenagem.component.scss']
})

export class EngrenagemComponent implements OnInit {

  login: Array<any>;

  constructor(private engrenagemService: EngrenagemService) { }


  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.engrenagemService.listar().subscribe(dados => this.login = dados);
  }
}
