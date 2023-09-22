import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import { PopupUserComponent } from './popup-user/popup-user.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateUserComponent } from './create-user/create-user.component';


const routes: Routes = [ 
  {path: 'login', component: LoginComponent},
  // {path: 'sign-up', component: SignUpComponent},
  {path: 'popup-user', component: PopupUserComponent},
  {path: 'user', component: UserComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'create-u', component: CreateUserComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
