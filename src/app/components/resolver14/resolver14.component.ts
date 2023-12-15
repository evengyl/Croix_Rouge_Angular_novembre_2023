import { Component } from '@angular/core';
import { ActivatedRoute, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, ResolveEnd, ResolveStart, Router } from '@angular/router';

@Component({
  selector: 'app-resolver14',
  templateUrl: './resolver14.component.html',
  styleUrls: ['./resolver14.component.scss']
})
export class Resolver14Component {

  listCountries : any[] = []

  constructor(private readonly route : ActivatedRoute) {

    this.listCountries = this.route.snapshot.data["listCountries"]

  }

}
