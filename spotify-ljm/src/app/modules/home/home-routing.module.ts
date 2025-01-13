import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'tracks',
    loadChildren:()=>import('@modules/tracks/tracks.module').then(m=>m.TracksModule)
    //path:'prefijo/:username/:other',
  },
  {
    path:'favorites',
    loadChildren:()=>import('@modules/favorites/favorites.module').then(m=>m.FavoritesModule)
    //path:'prefijo/:username/:other',
  },
  {
    path:'history',
    loadChildren:()=>import('@modules/history/history.module').then(m=>m.HistoryModule)
    //path:'prefijo/:username/:other',
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
