import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScriptRoutingModule } from './script-routing.module';
import { CadastrarscriptComponent } from './cadastrarscript/cadastrarscript.component';
import { ListarscriptComponent } from './listarscript/listarscript.component';
import { ScriptHomeComponent } from './script-home/script-home.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CadastrarscriptComponent,
    ListarscriptComponent,
    ScriptHomeComponent
  ],
  imports: [
    CommonModule,
    ScriptRoutingModule,
    FormsModule
  ],
  exports:[
    ScriptHomeComponent,
    CadastrarscriptComponent,
    ListarscriptComponent
  ]
})
export class ScriptModule { }
