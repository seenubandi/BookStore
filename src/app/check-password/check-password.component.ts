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

  constructor(private newService: AnsweresService ){}
  ngOnInit() {
    console.log(this.newService.success)
    console.log(this.newService.answeres)
  }

}
