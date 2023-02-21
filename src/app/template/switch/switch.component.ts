import { Component } from '@angular/core';
interface Persona {
  genero: string;
  notificaciones: boolean;
}
@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styles: [
  ]
})

export class SwitchComponent {
 
    genero:string=""
    notificaciones:boolean=true
 
  terminos:boolean=false;

  addPerson(){
    console.log(this.genero,this.notificaciones,this.terminos)
  }

}
