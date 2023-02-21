import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { DinamicComponent } from './dinamic/dinamic.component';
import { SwitchComponent } from './switch/switch.component';


 const routes: Routes = [
  { path: 'basic', component: BasicComponent },
  { path: 'dinamic', component: DinamicComponent },
  { path: 'switch', component: SwitchComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplateRoutingModule { }
