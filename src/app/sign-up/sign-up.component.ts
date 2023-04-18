import { Component } from '@angular/core';
import {CredentialsService} from '../credentials.service'

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  passWords = new CredentialsService()
  PasswordsList = this.passWords.Credentials
}
