import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styles: [
  ]
})

export class BasicComponent {

  @ViewChild('myForm') myForm!:NgForm;

  producto!:string
  precio!:number
  existencias!:number


  constructor() { }

  validar(field:string){
    return this.myForm?.controls[field]?.invalid && 
    this.myForm?.controls[field]?.touched
  }

save(){
  this.myForm.reset()
}











}
