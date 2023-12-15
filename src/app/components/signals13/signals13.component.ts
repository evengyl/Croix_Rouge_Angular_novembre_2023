import { Component, Signal, WritableSignal, signal } from '@angular/core';
import { HttpObservable13Service } from './services/http-observable13.service';
import { SignalService } from './services/signal.service';

@Component({
  selector: 'app-signals13',
  templateUrl: './signals13.component.html',
  styleUrls: ['./signals13.component.scss']
})
export class Signals13Component {

  //httpC
  allCountries : WritableSignal<any[]>


  //signals
  count : WritableSignal<number>
  qty : WritableSignal<number>
  total : Signal<number>

  constructor(
    private readonly httpObsServe: HttpObservable13Service,
    private readonly signalServe : SignalService
  ) {

    //#----------------------SIgnals Start part---------------------#
    this.count = this.signalServe.count
    this.qty = this.signalServe.qty
    this.total = this.signalServe.total
    this.allCountries = this.httpObsServe.allCountries
    
    this.httpObsServe.getAll()
    
    //#----------------------SIgnals End part---------------------#
  }

  //#----------------------SIgnals Start part---------------------#
  increment() {
    this.count.update((c) => {
      c = c + 1
      return c
    })

  }

  incrementQTY(){
    this.qty.update((c) => (c = c+1))
  }
  //#----------------------SIgnals end part---------------------#

}


