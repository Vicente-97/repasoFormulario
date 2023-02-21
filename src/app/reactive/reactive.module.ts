import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveRoutingModule } from './reactive-routing.module';
import { BasicComponent } from './basic/basic.component';
import { DinamicComponent } from './dinamic/dinamic.component';
import { SwitchComponent } from './switch/switch.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
   BasicComponent,
    DinamicComponent,
   SwitchComponent
  ],
  imports: [
    CommonModule,
    ReactiveRoutingModule,
    ReactiveFormsModule
  ],exports:[
    BasicComponent,
    DinamicComponent,
   SwitchComponent
  ]
})
export class ReactiveModule { }
