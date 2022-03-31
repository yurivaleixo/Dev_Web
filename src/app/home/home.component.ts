import { Component, OnInit } from '@angular/core';

const LISTA_DE_PESSOAS = [
  {
    id: 1,
    nome: "Paulo",
    cpf: "1234567",
    foto: "/assets/Borat.jpg"
  },
  {
    id: 2,
    nome: "Paulo",
    cpf: "1234567",
    foto: "/assets/Bob.jpg"
  },

];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listaDePessoas = LISTA_DE_PESSOAS;

  constructor() { }

  ngOnInit(): void {
  }

}
