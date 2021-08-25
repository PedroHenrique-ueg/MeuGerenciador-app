import { ListarscriptComponent } from './listarscript/listarscript.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarscriptComponent } from './cadastrarscript/cadastrarscript.component';

const routes: Routes = [
  {path: 'script', component:ListarscriptComponent},
  {path: 'script/novo', component: CadastrarscriptComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScriptRoutingModule { 
  
}
