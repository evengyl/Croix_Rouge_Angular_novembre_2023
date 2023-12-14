import { AbstractControl } from "@angular/forms";

export function pwdConfirm(controls : AbstractControl)
{
    let pwd1 = controls.value.pwd
    let pwd2 = controls.value.pwdConfirm

    if(pwd1 && pwd2)
    {

        if(pwd1 == pwd2)
            return null
        else
            return { error : "Les deux password ne correspondent pas"}
    }
    else
        return { error : "Champ Obligatoire"}
    
}