import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from './template/basic/basic.component';

const routes: Routes = [
  {path: '',
component: BasicComponent},
{  
  path: 'template',
  loadChildren: () => import('./template/template.module').then( m => m.TemplateModule )
},{ 

  path: 'reactive',
  loadChildren: () => import('./reactive/reactive.module').then( m => m.ReactiveModule )
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
