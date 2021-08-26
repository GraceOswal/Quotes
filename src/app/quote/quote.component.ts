import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]=[
    new Quote(1, 'Wendy', 'Having a soft heart is not weakness,its courage', 'Grace', 'Courage', new Date(2015,4,3)),
    new Quote(2,'Richard','On the other side of fear lies freedom', 'Nelson','Freedom', new Date (2012,7,7)),
    new Quote(3,'Suzan','Live life to express not to impress','Meghan M' ,'Self-discipline', new Date(2020,9,6)),
    new Quote(4,'Maureen','Work for a cause not applause', 'Limumba P','Determination', new Date(1998,5,3)),
    new Quote(5,'Kimathi','Limits like fears are often just an illusion','Michael J',  'Brave', new Date(2015,7,6)),
  ];
toggleDetails(index: any){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
readQuote(isRead: any, index: number){
    if (isRead) {
      this.quotes.splice(index,1);
    }
  }

  addNewQuote(quote:any){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.postedDate = new Date(quote.postedDate)
    this.quotes.push(quote)
  }
  constructor() { }

  ngOnInit() {
  }

}


