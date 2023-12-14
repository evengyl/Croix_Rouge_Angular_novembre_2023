import { Component, inject } from '@angular/core';
import { FakeAuthDemo6Service } from './fake-auth-demo6.service';

@Component({
  selector: 'app-dependencyinjection6',
  templateUrl: './dependencyinjection6.component.html'
})
export class Dependencyinjection6Component {

  public isConnectWS : boolean = false
  public isConnectLocal : boolean = false
  public isConnectSession : boolean = false

  constructor(private fakeAuthServe : FakeAuthDemo6Service){
    this.isConnectLocal = this.fakeAuthServe.isConnectLocal
    this.isConnectSession = this.fakeAuthServe.isConnectSession
  }

  loginWS(){
    this.isConnectWS = true
  }

  logoutWS(){
    this.isConnectWS = false
  }


  login(){
    this.isConnectLocal = this.fakeAuthServe.login()
  }

  logout(){
    this.isConnectLocal = this.fakeAuthServe.logout()
  }


  
  loginSession(){
    this.isConnectSession = this.fakeAuthServe.loginSession()
  }

  logoutSession(){
    this.isConnectSession = this.fakeAuthServe.logoutSession()
  }

  clearStorage()
  {
    this.fakeAuthServe.clearStorage()
  }


}
