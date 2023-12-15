import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountriesValidator } from './validators/checkCountry.validator';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-async-validators15',
  templateUrl: './async-validators15.component.html',
  styleUrls: ['./async-validators15.component.scss']
})
export class AsyncValidators15Component {

  myForm! : FormGroup

  constructor(private readonly fb : FormBuilder, private httpC : HttpClient) {
    this.generateMyForm()
  }


  generateMyForm(){
    this.myForm = this.fb.group(
      { pays : ["", [Validators.required], CountriesValidator.checkCountry(this.httpC)]}
    )
  }


  submitForm()
  {
      console.log(this.myForm)
  }

  echoVisu()
  {
    console.log(this.myForm)
  }


  validCountry(){
    if(this.myForm.controls["pays"].invalid)
      return "is-invalid"
    else
      return "is-valid"
  }
}
