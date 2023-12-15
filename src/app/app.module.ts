import { LOCALE_ID, NgModule } from '@angular/core';
import localFr from "@angular/common/locales/fr-BE"
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { Bindings1Component } from './components/bindings1/bindings1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Pipes2Component } from './components/pipes2/pipes2.component';
import { registerLocaleData } from '@angular/common';
import { PowerPipe } from './components/pipes2/power.pipe';
import { Directives3Component } from './components/directives3/directives3.component';
import { ZoomitDirective, ZoomitEventDirective, ZoomitEventParamsDirective } from './components/directives3/zoomit.directive';
import { TopPlayersComponent } from './components/inputOutput4/top-players/top-players.component';
import { PlayerComponent } from './components/inputOutput4/player/player.component';
import { DemoMaterialComponent } from './demo-material/demo-material.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FourOfour5Component } from './components/four-ofour5/four-ofour5.component';
import { Dependencyinjection6Component } from './components/dependencyinjection6/dependencyinjection6.component';
import { FakeAuthDemo6Service } from './components/dependencyinjection6/fake-auth-demo6.service';
import { Routage7Component } from './components/routage7/routage7.component';
import { SubroutageComponent } from './components/routage7/subroutage/subroutage.component';
import { CompoGuardedComponent } from './components/guards8/compo-guarded/compo-guarded.component';
import { Guards8Component } from './components/guards8/guards8.component';
import { Refreshpromise9Component } from './components/refreshpromise9/refreshpromise9.component';
import { ReactiveForms10Component } from './components/reactive-forms10/reactive-forms10.component';
import { HttpObservable12Component } from './components/http-observable12/http-observable12.component';
import { Signals13Component } from './components/signals13/signals13.component';
import { Resolver14Component } from './components/resolver14/resolver14.component';
import { AsyncValidators15Component } from './components/async-validators15/async-validators15.component';

registerLocaleData(localFr)

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    Bindings1Component,
    Pipes2Component,
    PowerPipe,
    Directives3Component,
    ZoomitDirective,
    ZoomitEventDirective,
    ZoomitEventParamsDirective,
    TopPlayersComponent,
    PlayerComponent,
    DemoMaterialComponent,
    FourOfour5Component,
    Dependencyinjection6Component,
    Routage7Component,
    SubroutageComponent,
    Guards8Component,
    CompoGuardedComponent,
    Refreshpromise9Component,
    ReactiveForms10Component,
    HttpObservable12Component,
    Signals13Component,
    Resolver14Component,
    AsyncValidators15Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    { provide : LOCALE_ID, useValue : "fr-BE" },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
