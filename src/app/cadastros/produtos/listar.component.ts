import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/models/produto.model';
import { CadastroService } from 'src/services/cadastro.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  produtos : Produto[] = [];

  constructor(private cadastro : CadastroService) { }

  ngOnInit(): void {
    this.cadastro.listarProdutos().subscribe(produtos => {
      console.log(produtos);
      this.produtos = produtos;

  });

  }

}
