import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {UserComponent} from './user/user.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { ReminderComponent } from './reminder/reminder.component';
import { ReminderCreateComponent } from './reminder-create/reminder-create.component';
import { TransactionCreateComponent } from './transaction-create/transaction-create.component';
import { TransactionComponent } from './transaction/transaction.component';



const routes: Routes = [ 
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'user', component: UserComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'user-c', component: UserCreateComponent},
  {path: 'user-u', component: UserUpdateComponent},
  {path: 'reminder', component: ReminderComponent},
  {path: 'reminder-c', component: ReminderCreateComponent},
  {path: 'transaction', component: TransactionComponent},
  {path: 'transaction-c', component: TransactionCreateComponent},


 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
