import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpObservable12Service {

  private _baseUrl = "https://restcountries.com/v3.1"

  constructor(private readonly httpC : HttpClient) { }

  getAll() : Observable<any[]>
  {
    return this.httpC.get<any[]>(this._baseUrl + "/all")
  }

  async getAllFetch() : Promise<any>
  {
    return await (await fetch(this._baseUrl + "/all")).json()
  }
}
