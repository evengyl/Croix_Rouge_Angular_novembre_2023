import { Component } from '@angular/core';
import { FakePromiseService } from './fake-promise.service';

@Component({
  selector: 'app-refreshpromise9',
  templateUrl: './refreshpromise9.component.html',
  styleUrls: ['./refreshpromise9.component.scss']
})
export class Refreshpromise9Component {

  datasV1: any = {}
  datasV2: any = {}
  datasV3: any = {}
  datasV4: any = []
  datasV5: any = {}
  datasV6: any = {}
  datasV7: any = {}

  errorsV1: any = {}
  errorsV2: any = {}
  errorsV3: any = {}
  errorsV4: any = {}
  errorsV5: any = {}
  errorsV6: any = {}

  constructor(private readonly refreshPromiseServe: FakePromiseService) {

    this.refreshPromiseServe.getDatasV1()
      .then((datas) => {
        this.datasV1 = datas
      })
      .catch((error) => {
        this.errorsV1 = error
      })




    this.refreshPromiseServe.getDatasV2()
      .then((datas) => {
        this.datasV2 = datas
      })
      .catch((error) => {
        this.errorsV2 = error
      })


    let promiseV3 = this.refreshPromiseServe.getDatasV3()
    //todo

    promiseV3.then((datas) => {
      this.datasV3 = datas
    })
      .catch((error) => {
        this.errorsV3 = error
      })




    this.refreshPromiseServe.getDatasV4()
      .then((datas) => {
        console.log(datas)
        this.datasV4 = datas
      })
      .catch((error) => {
        console.log(error)
        this.errorsV4 = error
      })


    this.refreshPromiseServe.getDatasV5()
      .then((datas) => {
        console.log(datas)
      })
      .catch((error) => {
        console.log(error)
      })

    console.log("Premier")
    this.getDatasV6()
    console.log("Deuxieme")

    this.getDatasV7()
    //end of constructor EOF
  }

  async getDatasV6() {
    let dataV6THEN = await this.refreshPromiseServe.getDatasV6()
    console.log("dataV6THEN")
  }


  async getDatasV7() {
    let dataV7THEN = await this.refreshPromiseServe.getDatasV7()
    console.log("dataV7THEN")
  }
}
