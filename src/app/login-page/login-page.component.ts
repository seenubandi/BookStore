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
  isLog() {
    if (this.password1.length == 0) {
      this.passwordErrMsg = "Enter a valid PassWord"
    } else {
      this.passwordErrMsg = ""
    }

    if (this.mobileNumber.length === 0) {
      this.mobileErrMsg = "Enter a valid number"

    } else {
      this.mobileErrMsg = ""
    }
    
    if (!(this.password1.length == 0||this.mobileNumber.length !== 10)) {
      this.link = "../header"
    }
  }
}

