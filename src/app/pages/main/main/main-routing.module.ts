import { MainComponent } from './main.component';
import { RouterModule,Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const routes:Routes =[
  {path:'main',component:MainComponent,}
]
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class MainRoutingModule { }
