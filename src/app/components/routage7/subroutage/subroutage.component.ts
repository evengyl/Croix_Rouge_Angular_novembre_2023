import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-subroutage',
  templateUrl: './subroutage.component.html',
  styleUrls: ['./subroutage.component.scss']
})
export class SubroutageComponent {

  myParams! : any
  myQuery! : any

  constructor(private readonly activeRoute : ActivatedRoute){
    console.log(this.activeRoute)

    if(this.activeRoute.snapshot.params["tutu"])
      this.myParams = this.activeRoute.snapshot.params["tutu"]

    if(this.activeRoute.snapshot.queryParams["orderby"])
      this.myQuery = this.activeRoute.snapshot.queryParams["orderby"]



  }

}
