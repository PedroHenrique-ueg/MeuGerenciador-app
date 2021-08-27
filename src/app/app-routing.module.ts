import { CadastrarScriptComponent } from './Script/cadastrar-script/cadastrar-script.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ListarScriptComponent } from './Script/listar-script/listar-script.component';

const routes: Routes = [
  { path: 'scripts', component: ListarScriptComponent },
  { path: 'home', component: HomeComponent },
  { path:'novoScript', component: CadastrarScriptComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
