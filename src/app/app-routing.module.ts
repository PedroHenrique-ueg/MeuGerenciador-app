import { CadClienteComponent } from './componentes/clientes/cad-cliente/cad-cliente.component';

import { CadastrarScriptComponent } from './Script/cadastrar-script/cadastrar-script.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ListarScriptComponent } from './Script/listar-script/listar-script.component';
import { ListClienteComponent } from './componentes/clientes/list-cliente/list-cliente.component';

const routes: Routes = [
  { path: 'scripts', component: ListarScriptComponent },
  { path: 'home', component: HomeComponent },
  { path:'novoScript', component: CadastrarScriptComponent },

  { path: 'clientes', component: ListClienteComponent },
  { path: 'novocliente', component: CadClienteComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
