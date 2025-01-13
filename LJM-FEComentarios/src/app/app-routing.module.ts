import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LjmListComentariosComponent } from './components/ljm-list-comentarios/ljm-list-comentarios.component';
import { LjmAgregarEditarComentarioComponent } from './components/ljm-agregar-editar-comentario/ljm-agregar-editar-comentario.component';
import { LjmVerComentarioComponent } from './components/ljm-ver-comentario/ljm-ver-comentario.component';

const routes: Routes = [
  {
    path:'',
    component: LjmListComentariosComponent
  },
  {
    path:'ljmagregar',
    component: LjmAgregarEditarComentarioComponent
  },
  {
    path:'ljmeditar/:id',
    component: LjmAgregarEditarComentarioComponent
  },
  {
    path:'ljmver/:id',
    component: LjmVerComentarioComponent
  },
  {
    path:'**', redirectTo:'/', pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
