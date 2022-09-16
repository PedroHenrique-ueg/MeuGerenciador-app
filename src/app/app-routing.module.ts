import { CadClienteComponent } from './componentes/clientes/cad-cliente/cad-cliente.component';

import { CadastrarScriptComponent } from './Script/cadastrar-script/cadastrar-script.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ListarScriptComponent } from './Script/listar-script/listar-script.component';
import { ListClienteComponent } from './componentes/clientes/list-cliente/list-cliente.component';
import { DetalhesScriptComponent } from './Script/detalhes-script/detalhes-script.component';
import { EditarScriptComponent } from './Script/editar-script/editar-script.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'scripts', component: ListarScriptComponent},
  { path:'novoScript', component: CadastrarScriptComponent },
  { path:'detalhes-script/:id', component:DetalhesScriptComponent },
  { path: 'editar-script/:id', component:EditarScriptComponent },

  { path: 'clientes', component: ListClienteComponent },
  { path: 'novocliente', component: CadClienteComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
