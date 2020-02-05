import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';


import { MarkerService } from './services/marker.service';
import { PopUpService } from './services/pop-up.service';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule

  ],
  providers: [MarkerService, PopUpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
