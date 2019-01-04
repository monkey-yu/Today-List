import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import {RouterModule,Routes } from '@angular/router';

const routes:Routes =[
    {path:'',redirectTo:'/login',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'main',redirectTo:'/main',pathMatch:'full'}
    
]
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule {}