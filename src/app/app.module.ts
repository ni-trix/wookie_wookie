import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page3Component } from './page3/page3.component';
import { HomepageComponent } from './homepage/homepage.component';
import { Page1Component } from './page1/page1.component';
import { Deviant1Component } from './deviant1/deviant1.component';
import { Deviant2Component } from './deviant2/deviant2.component';
import { Deviant3Component } from './deviant3/deviant3.component';
import { EndfooterComponent } from './endfooter/endfooter.component';
import { TasoeurComponent } from './tasoeur/tasoeur.component';

@NgModule({
  declarations: [
    AppComponent,
    Page3Component,
    HomepageComponent,
    Page1Component,
    Deviant1Component,
    Deviant2Component,
    Deviant3Component,
    EndfooterComponent,
    TasoeurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
