import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { HomePageComponent } from './components/home-page/home-page.component'
import { Bindings1Component } from './components/bindings1/bindings1.component'
import { Pipes2Component } from './components/pipes2/pipes2.component'
import { Directives3Component } from './components/directives3/directives3.component'
import { TopPlayersComponent } from './components/inputOutput4/top-players/top-players.component'
import { DemoMaterialComponent } from './demo-material/demo-material.component'
import { FourOfour5Component } from './components/four-ofour5/four-ofour5.component'
import { Dependencyinjection6Component } from './components/dependencyinjection6/dependencyinjection6.component'
import { Routage7Component } from './components/routage7/routage7.component'
import { SubroutageComponent } from './components/routage7/subroutage/subroutage.component'
import { Guards8Component } from './components/guards8/guards8.component'
import { CompoGuardedComponent } from './components/guards8/compo-guarded/compo-guarded.component'
import { fakeauth8Guard } from './components/guards8/fakeauth8.guard'
import { Refreshpromise9Component } from './components/refreshpromise9/refreshpromise9.component'
import { ReactiveForms10Component } from './components/reactive-forms10/reactive-forms10.component'

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "bindings1", component: Bindings1Component },
  { path: "pipes2", component: Pipes2Component },
  { path: "directives3", component: Directives3Component },
  { path: "inputoutput4", component: TopPlayersComponent },
  { path: "demomaterial", component: DemoMaterialComponent },
  { path: "dependencyinjection6", component: Dependencyinjection6Component },
  { path: "advanceroutage", component: Routage7Component },
  { path: "subroutage", children: [
      { path: "", component: SubroutageComponent },
      { path: ":tutu", component: SubroutageComponent, children: [
          { path: "other", children : [
            { path : "", component: SubroutageComponent},
            { path : ":toto", component: SubroutageComponent}
          ]}
        ]
      },

    ]
  },
  { path : "guards8", children : [
    { path: "", component: Guards8Component},
    { path : "privatecompoguarded", canActivate: [fakeauth8Guard] ,component : CompoGuardedComponent},
  ]},
  { path : "refreshpromise9", component : Refreshpromise9Component},
  { path : "reactiveforms10", component : ReactiveForms10Component},


  { path: "**", component: FourOfour5Component }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
