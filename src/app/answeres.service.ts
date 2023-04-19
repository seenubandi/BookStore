import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnsweresService {

  constructor() { }
  answeres = [{"no":"7997746940","password":"7997746940"}]
  success() {
    return "Successful"
  }
}
