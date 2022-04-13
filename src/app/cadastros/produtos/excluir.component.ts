import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/models/produto.model';
import { CadastroService } from 'src/services/cadastro.service';

@Component({
  selector: 'app-excluir',
  templateUrl: './excluir.component.html',
  styleUrls: ['./excluir.component.css']
})
export class ExcluirComponent implements OnInit {

  produto: Produto = new Produto();


  constructor(private cadastro: CadastroService,
            private router: Router,
            private route: ActivatedRoute) { 
    console.log("...........> Executou o método constructor()");
  }

  ngOnInit(): void {
    console.log("...........> Executou o método ngOnInit()");
    const str = this.route.snapshot.paramMap.get("id");
    this.cadastro.buscarPorId(Number(str)).subscribe((produto) =>{
      this.produto = produto;
  });

}

  excluirProduto(){
    console.log("-----------> Executou o método excluirProduto()");
    this.cadastro.excluirProduto(this.produto.id).subscribe(() => {
      this.router.navigate(['/cadastros/produtos']);
  }

  );

}

}
