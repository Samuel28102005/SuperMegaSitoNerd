import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlackDragonComponent } from './black-dragon/black-dragon.component';
import { YoungRedDragonComponent } from './young-red-dragon/young-red-dragon.component';
const routes: Routes = [
  {path : 'black_dragon', component: BlackDragonComponent},
  {path : 'young_red_dragon', component:YoungRedDragonComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }