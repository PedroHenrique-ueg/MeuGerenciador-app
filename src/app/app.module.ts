import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarScriptComponent } from './Script/listar-script/listar-script.component';
import { CadastrarScriptComponent } from './Script/cadastrar-script/cadastrar-script.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarScriptComponent,
    CadastrarScriptComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
