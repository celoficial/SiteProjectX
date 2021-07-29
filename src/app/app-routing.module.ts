import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';
import { ListagemComponent } from './pages/listagem/listagem.component';

  const routes: Routes = [
    {
      path:"",
      component:ListagemComponent
    },
    {
      path:"details/:id",
      component: DetalhesComponent
    },
    {
      path: "cadastro",
      component: CadastroComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
