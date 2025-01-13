import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NabvarLjmComponent } from './components/nabvar-ljm/nabvar-ljm.component';

@NgModule({
  declarations: [
    AppComponent,
    NabvarLjmComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
