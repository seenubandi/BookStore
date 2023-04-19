import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  philosophy=false;
  kids = false; 
  faqs = true;
  home = false;

  makePhilosophy() {
    this.philosophy = true 
    this.kids = false 
    this.faqs = false
    this.home = false
  }
  makeKids() {
    this.philosophy = false 
    this.kids = true 
    this.faqs = false
    this.home = false
  }
  makeFaqs() {

    this.philosophy = false 
    this.kids = false 
    this.faqs = true
    this.home = false
  }
  makeHome() {
    this.philosophy = false 
    this.kids = false 
    this.faqs = false
    this.home = true
  }

  faqsArray = [
    {
      "id":1,
      "question":"What is the Process of buying books In Purchase books?"
    },
    {
      "id":2,
      "question":"How This Purchase books Runs actually?"
    },
    {
      "id":3,
      "question":"How To Purchase books?"
    },
    {
      "id":4,
      "question":"What is the validity of books purchased?"
    },
    {
      "id":5,
      "question":"Why we should belive this purchase books?"
    },
    {
      "id":1,
      "question":"Does All type of genres of books available here?"
    },
    {
      "id":1,
      "question":"How payment process works in purchase books?"
    }
  ]

  

}
