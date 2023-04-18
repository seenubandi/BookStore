import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  philosophy=false;
  kids = false; 
  faqs = false;

  makePhilosophy() {
    this.philosophy = true 
    this.kids = false 
    this.faqs = false
  }
  makeKids() {
    this.philosophy = false 
    this.kids = true 
    this.faqs = false
  }
  makeFaqs() {

    this.philosophy = false 
    this.kids = false 
    this.faqs = true

  }

}
