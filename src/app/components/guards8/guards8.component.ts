import { Component } from '@angular/core';
import { FakeAuthGuardService } from './fakeauth.guard.service';

@Component({
  selector: 'app-guards8',
  templateUrl: './guards8.component.html',
  styleUrls: ['./guards8.component.scss']
})
export class Guards8Component {

  statusAuth : boolean = false

  constructor(private readonly fakeAuthServe : FakeAuthGuardService){
    this.statusAuth = this.fakeAuthServe.statusAuth
  }

  login(){
    this.fakeAuthServe.login()
    this.statusAuth = this.fakeAuthServe.statusAuth
  }

  logout(){
    this.fakeAuthServe.logout()
    this.statusAuth = this.fakeAuthServe.statusAuth
  }
}
