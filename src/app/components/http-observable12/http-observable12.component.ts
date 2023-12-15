import { Component } from '@angular/core';
import { HttpObservable12Service } from './services/http-observable12.service';
import { FakeLogin12Service } from './services/fake-login12.service';

@Component({
  selector: 'app-http-observable12',
  templateUrl: './http-observable12.component.html',
  styleUrls: ['./http-observable12.component.scss']
})
export class HttpObservable12Component {

  //OBS
  isConnect : boolean = false

  //httpC
  listCountries : any[] = []
  listCountries2 : any[] = []

  constructor(
    private readonly httpObsServe : HttpObservable12Service,
    private readonly fakeLoginServe : FakeLogin12Service
  )
  {

    //#----------------------HttpClient Start part---------------------#
    this.httpObsServe.getAll().subscribe((res : any[]) => {
      this.listCountries = res
    })
    
    this.httpObsServe.getAll().subscribe({
      next : (datas : any[]) => {
        this.listCountries2 = datas
      },
      error : (errors : any) => {
        console.log("Erreur")
      },
      complete : () => {
        console.log("OBsersable Finish")
      }
    })



    //fetch
    this.httpObsServe.getAllFetch().then((res : any[]) => {
      console.log(res)
    })

    //#----------------------HttpClient part END---------------------#



    this.fakeLoginServe.isConnect$.subscribe((isConnect : boolean) => {
      this.isConnect = isConnect
    })
  }


  
    //#----------------------OBS part START---------------------#
    login(){
      this.fakeLoginServe.login()
    }

    logout(){
      this.fakeLoginServe.logout()
    }

    //#----------------------OBS part END---------------------#
}
