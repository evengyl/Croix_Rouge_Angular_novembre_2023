import { HttpClient } from "@angular/common/http"
import { inject } from "@angular/core"
import { AbstractControl } from "@angular/forms"
import { map, switchMap, timer } from "rxjs"

export class CountriesValidator{

    static readonly URL : string = "https://restcountries.com/v3.1/all"

    public static checkCountry(httpC : HttpClient)
    {
        return (control : AbstractControl) => {
            return timer(1000).pipe(
                    switchMap(
                        () => httpC.get<any>(this.URL)
                        .pipe(
                            map((response : any) => {
                                if(response.find((country : any) => country.name.common == capitalizeFirstLetter(control.value)))
                                    return null
                                else
                                    return { error : "Pays non trouvé"}
                            }
                        )
                    )
                
                )
            )
        }
    }
}



function capitalizeFirstLetter(string  :string)
{
    return string.charAt(0).toUpperCase() + string.slice(1)
}