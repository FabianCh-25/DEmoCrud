import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetComponent } from './component/pet/pet.component';
import { PetInsertarComponent } from './component/pet/pet-insertar/pet-insertar.component';

const routes: Routes = [
  {
    path:'pets',
    component: PetComponent,
    children:[
      {
        path:'petsinsertar',
        component: PetInsertarComponent,
      },
      {
        path: 'edicion/:id',component:PetInsertarComponent //nueva ruta para editar
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
