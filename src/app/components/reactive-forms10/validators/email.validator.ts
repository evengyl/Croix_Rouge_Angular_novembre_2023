import { AbstractControl } from "@angular/forms";

export function emailValidator(minLength: number)
{

    return (control : AbstractControl) => {

        let value = control.value

        if(value.length < minLength)
            return { error : "Email must be at least " + minLength + " characters"}

        let testMatch = value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)

        if(testMatch && testMatch[0] == value)
            return null
        else
            return { error : "Ceci n'est pas une email valide"}
    }
}