import { Component, OnInit } from '@angular/core';
import { CadastroService } from 'src/services/cadastro.service';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent implements OnInit {

  //produtos : Produto[];

  constructor(private cadastro: CadastroService) { 
    //this.produtos = Produto.as
  }

  ngOnInit(): void {
    
    this.cadastro.listarProdutos().subscribe(produtos => {
      console.log(produtos);
    });
 
  }

}
