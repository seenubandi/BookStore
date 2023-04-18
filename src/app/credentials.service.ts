import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CredentialsService {

  constructor() { }
  Credentials:Array<object> = [{
    "mobile":"7997746940",
    "password":"7997746940"
  }]

  isLoggedIn = false
  
}
