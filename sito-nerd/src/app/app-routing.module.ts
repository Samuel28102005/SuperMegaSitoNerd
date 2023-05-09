import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlackDragonComponent } from './black-dragon/black-dragon.component';
import { YoungRedDragonComponent } from './young-red-dragon/young-red-dragon.component';
import { WhiteMonsterComponent } from './white-monster/white-monster.component';
import { GreenSlimeComponent } from './green-slime/green-slime.component';
const routes: Routes = [
  {path : 'black_dragon', component: BlackDragonComponent},
  {path : 'young_red_dragon', component:YoungRedDragonComponent},
  {path : 'white-monster', component:WhiteMonsterComponent},
  {path : 'green-slime', component:GreenSlimeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }