import { Component, OnInit } from '@angular/core';
import {FormControl, NgForm, Validators} from '@angular/forms';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  maxDate = new Date()
  constructor(
    ) { 
   

 
  }

  ngOnInit() {
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18)

  }

  // onSubmit(form: NgForm){
  //   this.authService.registerUser({
  //     email: form.value.email,
  //     password:form.value.password
  //   })
  // }
 
}
