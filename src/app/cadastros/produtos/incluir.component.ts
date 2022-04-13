import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/models/produto.model';
import { CadastroService } from 'src/services/cadastro.service';

@Component({
  selector: 'app-incluir',
  templateUrl: './incluir.component.html',
  styleUrls: ['./incluir.component.css']
})
export class IncluirComponent implements OnInit {

  produto: Produto = new Produto();


  constructor(private cadastro: CadastroService,
            private router: Router) { 
    console.log("...........> Executou o método constructor()");
  }

  ngOnInit(): void {
    console.log("...........> Executou o método ngOnInit()");
  }

  salvarProduto(){
    console.log("-----------> Executou o método salvarProduto()");
    this.cadastro.incluirProduto(this.produto);
  }

}
