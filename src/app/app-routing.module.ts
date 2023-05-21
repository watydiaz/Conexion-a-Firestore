import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FomularioComponent } from './fomulario/fomulario.component';


const routes: Routes = [
  {
    path: "formulario",
    component: FomularioComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
