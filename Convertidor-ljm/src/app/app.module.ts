import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

//Mis Componentes

import { NabvarLjmComponent } from './components/nabvar-ljm/nabvar-ljm.component';
import { ConvertidorLjmComponent } from './components/convertidor-ljm/convertidor-ljm.component';

@NgModule({
  declarations: [
    AppComponent,
    NabvarLjmComponent,
    ConvertidorLjmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
