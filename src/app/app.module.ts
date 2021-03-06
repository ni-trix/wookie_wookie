import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page3Component } from './page3/page3.component';
import { HomepageComponent } from './homepage/homepage.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page4Component } from './page4/page4.component';
import { Page3etDemiComponent } from './page3et-demi/page3et-demi.component';
import { DeviantOneComponent } from './deviant-one/deviant-one.component';
import { DeviantTwoComponent } from './deviant-two/deviant-two.component';
import { DeviantThreeComponent } from './deviant-three/deviant-three.component';
import { FooterComponent } from './footer/footer.component';
import { TasoeurComponent } from './tasoeur/tasoeur.component';
import { Page5Component } from './page5/page5.component';

@NgModule({
  declarations: [
    AppComponent,
    Page3Component,
    HomepageComponent,
    Page1Component,
    Page2Component,
    Page4Component,
    Page3etDemiComponent,
    DeviantOneComponent,
    DeviantTwoComponent,
    DeviantThreeComponent,
    FooterComponent,
    TasoeurComponent,
    Page5Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
