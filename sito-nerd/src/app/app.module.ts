import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlackDragonComponent } from './black-dragon/black-dragon.component';
import { YoungRedDragonComponent } from './young-red-dragon/young-red-dragon.component';
import { HttpClientModule } from '@angular/common/http';
import { WhiteMonsterComponent } from './white-monster/white-monster.component';
import { GreenSlimeComponent } from './green-slime/green-slime.component';
import { PurpleCrabComponent } from './purple-crab/purple-crab.component';

@NgModule({
  declarations: [
    AppComponent,
    BlackDragonComponent,
    YoungRedDragonComponent,
    WhiteMonsterComponent,
    GreenSlimeComponent,
    PurpleCrabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
