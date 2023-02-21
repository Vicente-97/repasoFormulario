import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styles: [
  ]
})
export class BasicComponent {

  myForm:FormGroup= this.fb.group({
    nombre:['',[Validators.required,Validators.minLength(3)]],
    precio:[0,[Validators.required,Validators.min(3)]],
    existencias:[0,[Validators.required,Validators.min(3)]]
  })

  constructor(private fb: FormBuilder){

  }
  isValidField(field:string){
    return this.myForm.controls[field].errors && this.myForm.controls[field].touched
  }

  save(){
    if (this.myForm.invalid){

      this.myForm.markAllAsTouched()
      return alert('Te equivocaste')
      
    }
    this.myForm.reset()
  }

}
