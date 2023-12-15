import { Component } from '@angular/core'
import { ResolveEnd, ResolveStart, Router } from '@angular/router'

@Component({
  selector: 'app-root',
  templateUrl : "app.component.html"
})
export class AppComponent {

  pageLoading: boolean = false

  constructor(private router: Router) {

    this.router.events.subscribe(event => {
      switch (true) {
        case event instanceof ResolveStart: {
          console.log("Resolver Compo Start")
          this.pageLoading = true
          break
        }
        case event instanceof ResolveEnd: {
          console.log("Resolver Compo End")
          this.pageLoading = false
          break
        }
      }
    })
  }


}
