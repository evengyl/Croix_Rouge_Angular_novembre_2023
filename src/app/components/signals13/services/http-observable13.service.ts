import { HttpClient } from '@angular/common/http';
import { Injectable, WritableSignal, signal } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpObservable13Service {

  private _baseUrl = "https://restcountries.com/v3.1"

  allCountries : WritableSignal<any[]> = signal([])

  constructor(private readonly httpC : HttpClient) { }

  getAll()
  {
    this.httpC.get<any[]>(this._baseUrl + "/all").subscribe((datas) => {
        this.allCountries.set(datas)
    })
  }
}
