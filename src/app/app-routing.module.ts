import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';
import { IniciarComponent } from './pages/iniciar/iniciar.component';


const route: Routes= [
  { path:'', redirectTo:'home', pathMatch:'full'},
  {path:'iniciar', component:IniciarComponent}

];


@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot( route),
    CommonModule
  ], exports:[RouterModule]
})
export class AppRoutingModule { }
