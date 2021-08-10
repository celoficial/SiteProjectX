import { MinhalistaComponent } from './pages/minhalista/minhalista.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';
import { ListagemComponent } from './pages/listagem/listagem.component';
import { LoginComponent } from './pages/login/login.component';

  const routes: Routes = [
    {
      path:"",
      component:ListagemComponent
    },
    {
      path:"details",
      component: DetalhesComponent
    },
    {
      path: "cadastro",
      component: CadastroComponent
    },

    {path: "minhalista",
    component: MinhalistaComponent
  },
  {
    path: "login",
    component: LoginComponent
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
