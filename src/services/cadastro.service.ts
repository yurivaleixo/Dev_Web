import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from 'src/models/produto.model';

@Injectable({
  providedIn: 'root'
})

export class CadastroService {

  constructor(private http: HttpClient) {

   }

   URL = "http://localhost:3001/produtos";

  listarProdutos() {
    return this.http.get<Produto[]> ("http://localhost:3001/produtos");
  }


  //buscarPorId()

  //incluir()

  //atualizar()

  //excluir()
}
