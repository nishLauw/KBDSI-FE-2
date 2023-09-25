import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserComponent } from './user/user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReminderComponent } from './reminder/reminder.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { ReminderCreateComponent } from './reminder-create/reminder-create.component';
import { TransactionComponent } from './transaction/transaction.component';
import { TransactionCreateComponent } from './transaction-create/transaction-create.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    UserComponent,
    DashboardComponent,
    ReminderComponent,
    UserUpdateComponent,
    UserCreateComponent,
    ReminderCreateComponent,
    TransactionComponent,
    TransactionCreateComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
