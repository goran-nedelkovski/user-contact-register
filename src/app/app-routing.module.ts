import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
//import { compileBaseDefFromMetadata } from '@angular/compiler';
import { HomeComponent } from './home/home.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RegisterComponent } from './register/register.component';
import {AuthGuard} from './auth.guard';


const routes: Routes = [
  {
    path:'',
    redirectTo:'/register',
    pathMatch: 'full'
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path: 'home',
    component:HomeComponent,
    canActivate: [AuthGuard]      // when we navigate on this route (home), the canActivate Guard is executed. 
  },
  {
    path: 'user-details',
    component: UserDetailsComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
