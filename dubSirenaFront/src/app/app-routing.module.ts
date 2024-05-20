import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EquipamentsComponent } from './content/equipaments/equipaments.component';

const routes: Routes = [
  
  {path:'equipo', component: EquipamentsComponent, pathMatch:'prefix'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
