import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { OfertasComponent } from './components/ofertas/ofertas.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpresasComponent,
    OfertasComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
