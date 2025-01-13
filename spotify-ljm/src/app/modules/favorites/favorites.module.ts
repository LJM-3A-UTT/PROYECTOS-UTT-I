import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesPageComponent } from './pages/favorites-page/favorites-page.component';
import { FavoritesRoutingModule } from './favorites-routing.module';
import { SharedModule } from 'src/app/Shared/shared.module';

@NgModule({
  declarations: [
    FavoritesPageComponent
  ],
  imports: [
    CommonModule,
    FavoritesRoutingModule,
    SharedModule
  ]
})
export class FavoritesModule { }
