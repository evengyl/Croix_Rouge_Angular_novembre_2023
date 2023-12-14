import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { initForm } from './myform';
import { pwdConfirm } from './validators/pwdConfirm.validor';

@Component({
  selector: 'app-reactive-forms10',
  // templateUrl: './reactive-forms10.component.html',
  templateUrl: './reactive-forms10.component.html',
  styleUrls: ['./reactive-forms10.component.scss']
})
export class ReactiveForms10Component {

  myForm! : FormGroup
  
  constructor(private readonly fb : FormBuilder){

    this.myForm = this.fb.group(initForm, {
      validators : pwdConfirm
    })
  }


  onSubmitRf(){
    console.log(this.myForm)
  }

  viewForm(){
    console.log(this.myForm)
  }
}
