import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class CountryResolverService {

    private baseUrl: string = "https://restcountries.com/v3.1"

    constructor(private readonly httpC: HttpClient) {

    }

    getAllcountries(): Observable<any[]> {
        return this.httpC.get<any[]>(this.baseUrl + "/all")
    }
}