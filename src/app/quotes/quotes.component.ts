import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  title = 'welcome to Worlds quotes';
  quotes:Quote[] = [
    new Quote (1,'Joseph ','Attitude Quotes','Everything can be taken from a man but one thing: the last of human freedoms - to choose one attitude in any given set of circumstances, to choose one own way.','Viktor E. Frankl', new Date(2020,5,3),0,0),
    new Quote (2,'Kennedy ','Technology Quotes','Technology… the knack of so arranging  that we don’t have to experience it.','Max Frisch',new Date(2019,7,14),0,0),
    new Quote (3,'Joe-Kicker ','Motivational Quotes','Do the difficult things while they are easy and do the great things while they are small. A journey of a thousand miles must begin with a single step.','Libby Larsen',new Date(2019,6,3),0,0),
    new Quote (4,'Whitney ','Love Quotes','Love is of all passions the strongest, for it attacks simultaneously the head, the heart and the senses.','Lao Tzu',new Date(2019,7,7),0,0),
    new Quote (5,'Annalitta ','Beauty Quotes','Think of all the beauty still left around you and be happy.','Anne Frank',new Date(2019,7,17),0,0),
    new Quote (6,'Joe ','Tech and life','For a list of all the ways technology has failed to improve the quality of life, please press three.','Alice Kahn',new Date(2019,7,15),0,0)
  ];
  //Quote addition
  addedQuote(quote){
    let arraysize = this.quotes.length;
    quote.id = arraysize+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  get sortQuotes() {
    return this.quotes.sort((a, b) => {
      return <any>new Date(b.datePosted) - <any>new Date(a.datePosted);
    });
  }  
  //confirm deletion
  quoteDelete(isRead, index){
    if (isRead) {
      let toDelete = confirm(`Are you sure you want to delete this Quote?`)
      if(toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }
 
  displayInfo(index){
    this.quotes[index].showInfo = !this.quotes[index].showInfo;
  }
  constructor() { }

  ngOnInit() {
  }

}