import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakePromiseService {

  constructor() { }

  getDatasV1() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        //resolve({ name : "Loïc"})
        reject({ error : "Erreur 500"})
      }, 1000)
    })
  }


  getDatasV2() {
    let testPromiseV1 = fetch("https://restcountries.com/v3.1/all")

    //console.log(testPromiseV1)
    //to do...
    return testPromiseV1
  }


  getDatasV3() {
    return fetch("https://restcountries.com/v3.1/all")
  }


  getDatasV4(){
    let countries = fetch("https://restcountries.com/v3.1/all")
    let pokemons = fetch("https://pokeapi.co/api/v2/pokemon/")
    let posts = fetch("https://jsonplaceholder.typicode.com/posts")
    let otherError = new Promise((res, rej) => {
      rej({ error: "error global all"})
    })

    //all for one
    return Promise.all([countries, pokemons, posts, otherError])

  }



  getDatasV5(){
    let countries = fetch("https://restcountries.com/v3.1/all")
    let pokemons = fetch("https://pokeapi.co/api/v2/pokemon/")
    let posts = fetch("https://jsonplaceholder.typicode.com/posts")
    let otherError = new Promise((res, rej) => {
      rej({ error: "error global race"})
    })

    //premier arrivé
    return Promise.race([countries, pokemons, posts, otherError])

  }


  async getDatasV6() {
    let testPromiseV1 = fetch("https://restcountries.com/v3.1/all")

    //console.log(testPromiseV1)
    //to do...
    return testPromiseV1
  }

  async getDatasV7(){
    let testPromiseV1 = await fetch("https://restcountries.com/v3.1/all?fields=flag,name")
    let datas = await testPromiseV1.json()

    //todo
    //one of time
    let test = [0,1,2,3]
    datas.push(test)

    console.table(datas)

  }
}
