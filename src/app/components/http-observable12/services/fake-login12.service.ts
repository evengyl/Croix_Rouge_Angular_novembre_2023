import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeLogin12Service {

  isConnectSERVE : boolean = false

  isConnect : boolean = false
  isConnect$ : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isConnect)

  constructor() { }

  login(){
    this.isConnect  = true
    this.isConnectSERVE = true
    this.emit_isConnect()
  }

  logout(){
    this.isConnect = false
    this.isConnectSERVE = false
    this.emit_isConnect()
  }

  emit_isConnect(){ //button publier un photo
    this.isConnect$.next(this.isConnect)
  }
}
