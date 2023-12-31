import { Component, WritableSignal } from '@angular/core';
import { SignalService } from '../signals13/services/signal.service';
import { HttpObservable13Service } from '../signals13/services/http-observable13.service';

@Component({
  selector: 'app-bindings1',
  templateUrl: './bindings1.component.html'
})
export class Bindings1Component {

  //one way
  public maVariable : string = "maVariable"
  public maVariable2 : number = 42
  public maVariable3 : Date | undefined = undefined


  //twb 
  public maVar1 : string = "Bonjour"
  public maVar2 : number = 0
  public maDate3 : Date =  new Date()


  //event
  public count : number = 0
  public inter : any = null
  public chrono : number = 0 

    allCountries : WritableSignal<any[]>

  constructor(private readonly signalsServe : HttpObservable13Service){
    this.allCountries =  this.signalsServe.allCountries
    this.signalsServe.getAll()
  }

  public addOneCounter(){
    this.count ++
  }

  public removeOneCounter(){
    this.count --    
  }

  public resetCounter(){
    this.count = 0
  }


  public startChrono(){
    if(this.inter == null || this.inter >= 1){
      clearInterval(this.inter)
      this.inter = setInterval(() => {
        this.chrono++
      }, 1000)
    }
  }

  
  public stopChrono(){
    clearInterval(this.inter)
  }
  
  public resetChrono(){
    clearInterval(this.inter)
    this.chrono = 0
  }


  public testReference(value : any){
    alert(value)
  }


}
