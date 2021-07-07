import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalhesComponent } from './pages/detalhes/detalhes.component';
import { ListagemComponent } from './pages/listagem/listagem.component';

  const routes: Routes = [
    {path:"", component:ListagemComponent},
    {path:"details", component: DetalhesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
