import { Component } from '@angular/core';
import {CredentialsService} from '../credentials.service'
import { AnsweresService } from '../answeres.service';
AnsweresService

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  outString = ""

  link:string = "err"

  mobileErrMsg = ""

  headerValue = './header'
  passwordErrMsg = ""
  password1ErrMsg = ""
  showSuccess = ""

  constructor(private as:AnsweresService){

  }
  mobileNumber:any = ""
  password:any = ""
  password1:any = ""

  changeMobile(m:any) {
    this.mobileNumber = m
  }
  changePassword(m:any) {
    this.password1 = m
  }

  checkMobile() {
    if (this.mobileNumber.length === 0) {
      this.mobileErrMsg = "Enter a valid number"

    } else {
      this.mobileErrMsg = ""
    }
  }
  checkPassword() {
    if (this.password1.length == 0) {
      this.passwordErrMsg = "Enter a valid PassWord"
    } else {
      this.passwordErrMsg = ""
    }
  }
  confirmPassword() {
    if (this.password1 === this.password) {
      this.password1ErrMsg = "Both passwords should match"
    } else {
      this.password1ErrMsg = ""
    }
  }
  checkSignUp() {
    if (this.mobileNumber.length > 0 && this.password === this.password1) {
        this.showSuccess = "Your sign up has been successful"
    }
  }

  
  
  
}
