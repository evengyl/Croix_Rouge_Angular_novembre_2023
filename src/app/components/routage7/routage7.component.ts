import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-routage7',
  templateUrl: './routage7.component.html',
  styleUrls: ['./routage7.component.scss']
})
export class Routage7Component {

  constructor(private readonly router: Router){}

  navigate(){
    this.router.navigate(["subroutage"])
  }

  navigateParams(){
    this.router.navigate(["subroutage", "42"])
  }

  
  navigateMultiParams(){
    this.router.navigate(["subroutage", "42", "other", "115"])
  }

  navigateQuery(){
    this.router.navigate([""])
  }

}
