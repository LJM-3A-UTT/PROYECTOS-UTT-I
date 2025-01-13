import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DigimonesLjmComponent } from './digimones-ljm/digimones-ljm.component';
import { HttpClientModule } from '@angular/common/http';

import { DigimonesljmServices } from './digimones-ljm/digimones-ljm.service';
@NgModule({
  declarations: [
    AppComponent,
    DigimonesLjmComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    DigimonesljmServices,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
