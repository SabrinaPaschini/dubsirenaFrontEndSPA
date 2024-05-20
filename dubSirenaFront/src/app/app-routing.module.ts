import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuTitleComponent } from './menu/menu-title/menu-title.component';
import { EquipamentsComponent } from './content/equipaments/equipaments.component';

const routes: Routes = [
  {path:'', component: MenuTitleComponent, pathMatch:'full'}, // path é caminho, e virgula colocar o componete que quer renderizar 
  {path:'equipo', component: EquipamentsComponent, pathMatch:'prefix'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
