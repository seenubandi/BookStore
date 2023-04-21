import { Component } from '@angular/core';
import {CredentialsService} from '../credentials.service'
import { JsonPipe } from '@angular/common';
import { AnsweresService } from '../answeres.service';
AnsweresService
@Component({
  selector: 'app-check-password',
  templateUrl: './check-password.component.html',
  styleUrls: ['./check-password.component.scss']
})
export class CheckPasswordComponent {

  login = false 
  signup = false
  k = 1
  p = ""
  mr = ""
  mobileNumber:string=""
  changeMobile(m:any){
        this.mobileNumber = m
        if (m.length === 0) {
            this.mr = "Enter a mobile number"
        } else {
            this.mr = ""
            for (let char of this.newService.passwordsList) {
              if(char.no===this.mobileNumber) {
                  this.p = char.password
                  this.login = true
                  this.signup = false
                  this.k = 0
              }
            }
            if  (this.k == 1) {
              this.signup = true
              this.login = false
              this.mr = "Sorry You dont have an account click below signup button to get an account"
            }
        }
  }

 
  

  constructor(private newService: AnsweresService ){}
  ngOnInit() {
    console.log(this.newService.success)
  }
 

  

  
  

}
