import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page3Component } from './page3/page3.component';
import { HomepageComponent } from './homepage/homepage.component';
import { Page1Component } from './page1/page1.component';

@NgModule({
  declarations: [
    AppComponent,
    Page3Component,
    HomepageComponent,
    Page1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
