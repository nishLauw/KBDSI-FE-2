import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
<<<<<<< HEAD
import {LoginComponent} from './components/login/login.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';
import {UserComponent} from './components/user/user.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { UserUpdateComponent } from './components/user-update/user-update.component';
import { ReminderComponent } from './components/reminder/reminder.component';
import { ReminderCreateComponent } from './components/reminder-create/reminder-create.component';
import { TransactionCreateComponent } from './components/transaction-create/transaction-create.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { BookkeepingComponent } from './components/bookkeeping/bookkeeping.component';
import { EbudgetingComponent } from './components/ebudgeting/ebudgeting.component';
import { EbudgetingCreateComponent } from './components/ebudgeting-create/ebudgeting-create.component';
import { TransactionUpdateComponent } from './components/transaction-update/transaction-update.component';
import { ReminderUpdateComponent } from './components/reminder-update/reminder-update.component';
=======
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
>>>>>>> 6dd32c688efd0693a56f26ebcd1ce895fa14a3d7



const routes: Routes = [ 
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'user', component: UserComponent},
  {path: 'dashboard', component: DashboardComponent},
<<<<<<< HEAD
  {path: 'user-create', component: UserCreateComponent},
  {path: 'user-update', component: UserUpdateComponent},
  {path: 'reminder', component: ReminderComponent},
  {path: 'reminder-update', component: ReminderUpdateComponent},
  {path: 'reminder-create', component: ReminderCreateComponent},
  {path: 'transaction', component: TransactionComponent},
  {path: 'transaction-create', component: TransactionCreateComponent},
  {path: 'transaction-update', component: TransactionUpdateComponent},
  {path: 'bookkeeping', component: BookkeepingComponent},
  {path: 'ebudgetting', component: EbudgetingComponent},
  {path: 'ebudgetting-create', component: EbudgetingCreateComponent},

=======
  {path: 'user-c', component: UserCreateComponent},
  {path: 'user-u', component: UserUpdateComponent},
  {path: 'reminder', component: ReminderComponent},
  {path: 'reminder-c', component: ReminderCreateComponent},
  {path: 'transaction', component: TransactionComponent},
  {path: 'transaction-c', component: TransactionCreateComponent},
>>>>>>> 6dd32c688efd0693a56f26ebcd1ce895fa14a3d7


 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
