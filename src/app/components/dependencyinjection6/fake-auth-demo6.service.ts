import { Injectable } from '@angular/core';

@Injectable({
    // declares that this service should be created
  // by the root application injector.
  providedIn: 'root'
})
export class FakeAuthDemo6Service {


  public isConnectLocal : boolean = false
  public isConnectSession : boolean = false

  constructor() {
    let tmpIsConnect = localStorage.getItem('isConnectLocal')
    if(tmpIsConnect) this.isConnectLocal = JSON.parse(tmpIsConnect)

    let tmpIsConnectSession = sessionStorage.getItem('isConnectSession')
    if(tmpIsConnectSession) this.isConnectSession = JSON.parse(tmpIsConnectSession)
  }

  
  login(){
    this.isConnectLocal = true
    localStorage.setItem("isConnectLocal", JSON.stringify(this.isConnectLocal))
    return this.isConnectLocal
  }

  logout(){
    this.isConnectLocal = false
    localStorage.removeItem("isConnectLocal")
    return this.isConnectLocal
  }


  
  loginSession(){
    this.isConnectSession = true
    sessionStorage.setItem("isConnectSession", JSON.stringify(this.isConnectSession))
    return this.isConnectSession
  }

  logoutSession(){
    this.isConnectSession = false
    sessionStorage.removeItem("isConnectSession")
    return this.isConnectSession
  }


  clearStorage()
  {
    localStorage.clear()
    sessionStorage.clear()
    console.log(localStorage)
    
  }
}
