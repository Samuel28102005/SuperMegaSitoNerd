import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlackDragonComponent } from './black-dragon/black-dragon.component';
import { YoungRedDragonComponent } from './young-red-dragon/young-red-dragon.component';

@NgModule({
  declarations: [
    AppComponent,
    BlackDragonComponent,
    YoungRedDragonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
