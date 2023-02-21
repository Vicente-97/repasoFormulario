import { Component } from '@angular/core';
import {FormArray,FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
interface Persona {
  nombre: string;
  favoritos: Favorito[];
} 
interface Favorito {
  id: number;
  nombre: string;
}
@Component({
  selector: 'app-dinamic',
  templateUrl: './dinamic.component.html',
  styles: [
  ]
})
export class DinamicComponent {

  
  myFormulario: FormGroup= this.fb.group({
    nombre:['',[Validators.required,Validators.minLength(3)]],
    favoritos:this.fb.array([
      ['Suzuki',Validators.required],
      ['Motorola',Validators.required]
    ],Validators.required)
  


  })
  nuevoFavorito: FormControl = this.fb.control('', Validators.required);

  isValidField(field: string){
    return this.myFormulario.controls[field].errors
    && this.myFormulario.controls[field].touched
  }

  constructor(private fb:FormBuilder){
  
  }
  get favoritos(){
    return this.myFormulario.get('favoritos') as FormArray;
  }
  add(){
    if (this.nuevoFavorito.invalid) {
      return;
    }
    this.favoritos.push( this.fb.control(this.nuevoFavorito.value, Validators.required))
    this.nuevoFavorito.reset()
  }

  delete(i:number){
    this.favoritos.removeAt(i)
  }
  save(){
    if(this.myFormulario.invalid){
      this.myFormulario.markAllAsTouched();
      return alert("JAJJAJAJAJ ADMINISTREIGHCTBYTO");
    }
    this.favoritos.clear()
    return this.myFormulario.reset()
  }
}
