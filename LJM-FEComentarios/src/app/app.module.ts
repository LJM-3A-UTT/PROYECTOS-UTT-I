import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

//Componentes
import { AppComponent } from './app.component';
import { LjmNavbarComponent } from './components/ljm-navbar/ljm-navbar.component';
import { LjmAgregarEditarComentarioComponent } from './components/ljm-agregar-editar-comentario/ljm-agregar-editar-comentario.component';
import { LjmListComentariosComponent } from './components/ljm-list-comentarios/ljm-list-comentarios.component';
import { LjmVerComentarioComponent } from './components/ljm-ver-comentario/ljm-ver-comentario.component';


@NgModule({
  declarations: [
    AppComponent,
    LjmNavbarComponent,
    LjmAgregarEditarComentarioComponent,
    LjmListComentariosComponent,
    LjmVerComentarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
