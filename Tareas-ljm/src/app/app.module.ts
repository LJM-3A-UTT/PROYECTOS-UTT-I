import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarLjmComponent } from './componets/navbar-ljm/navbar-ljm.component';
import { TareasLjmComponent } from './componets/tareas-ljm/tareas-ljm.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarLjmComponent,
    TareasLjmComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
