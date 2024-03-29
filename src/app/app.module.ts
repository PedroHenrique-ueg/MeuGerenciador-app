import { EmpresaService } from './serviços/empresas-services.service';
import { ClienteService } from './serviços/clientes-services.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarScriptComponent } from './Script/listar-script/listar-script.component';
import { CadastrarScriptComponent } from './Script/cadastrar-script/cadastrar-script.component';
import { HomeComponent } from './home/home.component';
import { CadClienteComponent } from './componentes/clientes/cad-cliente/cad-cliente.component';
import { ListClienteComponent } from './componentes/clientes/list-cliente/list-cliente.component';
import { DetailClienteComponent } from './componentes/clientes/detail-cliente/detail-cliente.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CadFuncionarioComponent } from './componentes/funcionario/cad-funcionario/cad-funcionario.component';
import { ListFuncionarioComponent } from './componentes/funcionario/list-funcionario/list-funcionario.component';
import { DetailFuncionarioComponent } from './componentes/funcionario/detail-funcionario/detail-funcionario.component';
import { CadTicketComponent } from './componentes/ticket/cad-ticket/cad-ticket.component';
import { EncerraTicketComponent } from './componentes/ticket/encerra-ticket/encerra-ticket.component';
import { ListTicketComponent } from './componentes/ticket/list-ticket/list-ticket.component';
import { DetalhesScriptComponent } from './Script/detalhes-script/detalhes-script.component';
import { EditarScriptComponent } from './Script/editar-script/editar-script.component';
import { ListNadaConstaComponent } from './componentes/nadaConsta/list-nada-consta/list-nada-consta.component';
import { CadastrarNadaconstaComponent } from './componentes/nadaConsta/cadastrar-nadaconsta/cadastrar-nadaconsta.component';
import { DetalhesNadaconstaComponent } from './componentes/nadaConsta/detalhes-nadaconsta/detalhes-nadaconsta.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarScriptComponent,
    CadastrarScriptComponent,
    HomeComponent,
    CadClienteComponent,
    ListClienteComponent,
    DetailClienteComponent,
    CadFuncionarioComponent,
    ListFuncionarioComponent,
    DetailFuncionarioComponent,
    CadTicketComponent,
    EncerraTicketComponent,
    ListTicketComponent,
    DetalhesScriptComponent,
    EditarScriptComponent,
    ListNadaConstaComponent,
    CadastrarNadaconstaComponent,
    DetalhesNadaconstaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    ClienteService,
    EmpresaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
