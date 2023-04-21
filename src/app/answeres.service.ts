import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnsweresService {

  constructor() { }
  passwordsList = [{"no":"7997746940","password":"7997746940"}]
  backPage = false
  success() {
    return "Successful"
  }
}
