import { Component } from '@angular/core';

@Component({
  selector: 'app-faqs-answers',
  templateUrl: './faqs-answers.component.html',
  styleUrls: ['./faqs-answers.component.scss']
})
export class FaqsAnswersComponent {
  faqsArray = [
    {
      "id":1,
      "question":"What is the Process of buying books In Purchase books?",
      "answere":"Buying books in Purchase books is very simple. all you have to do is choose book and use UPI or Debit Card to make the payment."
    },
    {
      "id":2,
      "question":"How This Purchase books Runs actually?",
      "answere":"This is like a online book store and Offline book store If you want to get hard copy we will door deliver it to you."
    },
    {
      "id":3,
      "question":"Does Purchase books accept UPI payment?",
      "answere":"Yes, We have that option. Any time you can buy a book by using UPI Payment"
    },
    {
      "id":4,
      "question":"What is the validity of books purchased?",
      "answere":"If you take rent from purchase we will give certain validity for each book based on plan of rent that you have bee taken. If you want to avoid rent you can buy full book."
    },
    {
      "id":5,
      "question":"Why we should belive this purchase books?",
      "answere":"We are people who belived in books. If a person meets in your life who belived in books won't dissappoint you."
    },
    {
      "id":6,
      "question":"Does All type of genres of books available here?",
      "answere":"Yes all types of books are available here."
    },
    {
      "id":7,
      "question":"How payment process works in purchase books?",
      "answere":"Buying books in Purchase books is very simple. all you have to do is choose book and use UPI or Debit Card to make the payment."
    }
  ]
}
