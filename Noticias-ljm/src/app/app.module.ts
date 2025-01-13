import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';


import { FormularioLjmComponent } from './components/formulario-ljm/formulario-ljm.component';
import { ListadoNoticiasLjmComponent } from './components/listado-noticias-ljm/listado-noticias-ljm.component';
import { NavbarLjmComponent } from './components/navbar-ljm/navbar-ljm.component';
import { SpinnerLjmComponent } from './shared/spinner-ljm/spinner-ljm.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularioLjmComponent,
    ListadoNoticiasLjmComponent,
    NavbarLjmComponent,
    SpinnerLjmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
