import { Validators } from "@angular/forms";
import { emailValidator } from "./validators/email.validator";

export const initForm = {
    name : ["Baudoux Loïc", [Validators.minLength(3), Validators.maxLength(20), Validators.required]],
    email : ["baudouxloic@gmail.com", [emailValidator(6), Validators.required]],
    pwd : ["", [Validators.minLength(8), Validators.maxLength(20), Validators.required]],
    pwdConfirm : ["", [Validators.minLength(8), Validators.maxLength(20), Validators.required]],
    gender : ["male", [Validators.required]],
}
