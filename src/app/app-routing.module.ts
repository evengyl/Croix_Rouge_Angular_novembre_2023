import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomePageComponent } from './components/home-page/home-page.component'
import { Bindings1Component } from './components/bindings1/bindings1.component'
import { Pipes2Component } from './components/pipes2/pipes2.component'

const routes: Routes = [
  { path : "", component: HomePageComponent},
  { path : "bindings1", component: Bindings1Component},
  { path : "pipes2", component: Pipes2Component}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
