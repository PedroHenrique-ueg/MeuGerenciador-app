import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScriptRoutingModule } from './script-routing.module';
import { CadastrarscriptComponent } from './cadastrarscript/cadastrarscript.component';
import { ListarscriptComponent } from './listarscript/listarscript.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CadastrarscriptComponent,
    ListarscriptComponent
  ],
  imports: [
    CommonModule,
    ScriptRoutingModule,
    FormsModule
  ],
  exports:[
    CadastrarscriptComponent,
    ListarscriptComponent
  ]
})
export class ScriptModule { }
