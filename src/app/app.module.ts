import { LOCALE_ID, NgModule } from '@angular/core';
import localFr from "@angular/common/locales/fr-BE"
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { Bindings1Component } from './components/bindings1/bindings1.component';
import { FormsModule } from '@angular/forms';
import { Pipes2Component } from './components/pipes2/pipes2.component';
import { registerLocaleData } from '@angular/common';
import { PowerPipe } from './components/pipes2/power.pipe';

registerLocaleData(localFr)

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    Bindings1Component,
    Pipes2Component,
    PowerPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    { provide : LOCALE_ID, useValue : "fr-BE" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
