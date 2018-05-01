import { Ordemservico } from './ordemServico';
import { Component, OnInit } from '@angular/core';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor(
    private ordemservico: Ordemservico 
  ) {}

  ngOnInit() {}

  onSubmit(form){
    console.log(this.ordemservico);
  }

}
