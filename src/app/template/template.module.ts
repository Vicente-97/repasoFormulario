import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';

import { BasicComponent } from './basic/basic.component';
import { DinamicComponent } from './dinamic/dinamic.component';
import { SwitchComponent } from './switch/switch.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [   
    BasicComponent,
    DinamicComponent,
    SwitchComponent
  ],
  imports: [
    CommonModule,
    TemplateRoutingModule,
    FormsModule










  ],exports:[
    BasicComponent,
    DinamicComponent,
    SwitchComponent,
    
  ]
})
export class TemplateModule { }
