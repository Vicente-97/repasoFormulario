import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styles: [
  ]
})
export class SwitchComponent {
  myForm: FormGroup = this.fb.group({
    genero: ['F', Validators.required],
    notificaciones: [ true],
    terminos: [false, Validators.requiredTrue]
  })

 
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
  

    
  }
  
  save(){
    console.log(this.myForm.controls['genero'].value)
    console.log(this.myForm.controls['notificaciones'].value)
    console.log(this.myForm.controls['terminos'].value)

  }
}
