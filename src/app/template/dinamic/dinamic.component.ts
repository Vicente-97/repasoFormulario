import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

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

@ViewChild('myFormulario') myFormulario! : NgForm

  persona : Persona = { nombre: 'Manuel', favoritos: [{id: 1, nombre: 'Star Wars'}, {id: 2, nombre: 'Marvel'}]}

  nombre!:string


  check(nombre:string){
    return this.myFormulario?.controls[nombre]?.invalid && 
    this.myFormulario?.controls[nombre]?.touched
  }



 add(){
  const ultimo = this.persona.favoritos.length
 
  if(this.nombre.trim().length>0){
    this.persona.favoritos.push({id:ultimo+1,nombre:this.nombre});
    this.nombre="";
  }

 }


 delete(numero:number){
  this.persona.favoritos.splice(numero,1);
 }

  save(){

  }

}
