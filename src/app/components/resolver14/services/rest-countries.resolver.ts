import { ResolveFn } from '@angular/router';
import { CountryResolverService } from './countryResolver.service';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

export const restCountriesResolver: ResolveFn<Observable<any>> = (route, state) => {

  let countriesServe = inject(CountryResolverService)
  console.log("Resolver en cours de travail")

  return countriesServe.getAllcountries()


};
