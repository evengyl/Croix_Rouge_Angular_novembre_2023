import { Component, WritableSignal } from '@angular/core';
import { FakeLogin12Service } from 'src/app/components/http-observable12/services/fake-login12.service';
import { SignalService } from 'src/app/components/signals13/services/signal.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  
  isConnectOBS : boolean = false
  isConnectSERVE : boolean = false

  count : WritableSignal<number>

  constructor(
    private readonly obsServe : FakeLogin12Service,
    private readonly signalServe : SignalService
    )
  {
    this.count = this.signalServe.count






    this.isConnectSERVE = this.obsServe.isConnectSERVE 

    this.obsServe.isConnect$.subscribe((isConnect) => {
      this.isConnectOBS = isConnect;
    })
  }

  login(){
    this.obsServe.login()
  }
}
