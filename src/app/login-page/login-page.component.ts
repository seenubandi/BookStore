import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgModule} from '@angular/core'
import {CredentialsService} from '../credentials.service'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  // passWords = new CredentialsService()
  // PasswordsList = this.passWords.Credentials
 
  link:string = "err"

  mobileErrMsg = ""

  headerValue = './header'
  passwordErrMsg = ""

  mobileNumber:any = ""
  password1:any = ""

  changeMobile(m:any) {
    this.mobileNumber = m
  }
  changePassword(m:any) {
    this.password1 = m
  }
  checkMobile() {
    if (this.mobileNumber.length !== 10) {
      this.mobileErrMsg = "Mobile no must be 10 digits"

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
  isLog() {
    this.checkMobile;
    this.changePassword;
    if (this.password1.length == 0||this.mobileNumber.length !== 10) {

    } else {
      this.link = "../header"
    }
  }
}

