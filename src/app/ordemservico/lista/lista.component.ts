import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'listaos',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  os: any = [{
    os: 123,
    cliente: "a",
    situacao: "Consertada",
    orcamento: 554,
    dataentrada: "26/06/2018",
    dataentrega: "26/06/2019" 
  },
  {
    os: 564,
    cliente: "b",
    situacao: "Ag. Peça",
    orcamento: 219,
    dataentrada: "13/09/2018",
    dataentrega: "18/09/2018" 
  },
  {
    os: 815,
    cliente: "c",
    situacao: "Entregue",
    orcamento: 0,
    dataentrada: "13/09/2018",
    dataentrega: "13/09/2018" 
  }
  ];

  constructor() { }

  ngOnInit() {
  }

  onClick(e){
    console.log(e);
  }

}
