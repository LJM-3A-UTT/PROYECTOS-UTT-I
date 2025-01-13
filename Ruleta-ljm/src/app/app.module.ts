// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RuletaLjmComponent } from './components/ruleta-ljm/ruleta-ljm.component';
import { ApuestaLjmComponent } from './components/apuesta-ljm/apuesta-ljm.component';

@NgModule({
  declarations: [
    AppComponent,
    RuletaLjmComponent,
    ApuestaLjmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
