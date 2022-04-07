import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { CadastrosComponent } from './cadastros/cadastros.component';
import { EditarComponent } from './cadastros/produtos/editar.component';
import { ExcluirComponent } from './cadastros/produtos/excluir.component';
import { IncluirComponent } from './cadastros/produtos/incluir.component';
import { ListarComponent } from './cadastros/produtos/listar.component';
import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "admin", component: AdminComponent},
  {path: "cadastros", component: CadastrosComponent, 
      children : [
        {path: "produtos", component: ListarComponent},
        {path: "incluir", component: IncluirComponent},
        {path: "excluir", component: ExcluirComponent},
        {path: "editar", component: EditarComponent}

      ]
  },
  {path: "sobre", component: SobreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
