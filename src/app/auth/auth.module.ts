import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule, } from "@angular/material/input"
import {  MatFormFieldModule } from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox';



import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDatepickerModule,
    MatCheckboxModule
    
  ],
  exports:[
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatCheckboxModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
