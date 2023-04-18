import { Component } from '@angular/core';
import {CredentialsService} from '../credentials.service'
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-check-password',
  templateUrl: './check-password.component.html',
  styleUrls: ['./check-password.component.scss']
})
export class CheckPasswordComponent {

  mobileNumber:any
  
  constructor(private ts:CredentialsService) {

  }
  PasswordsList:any = this.ts.Credentials

}
