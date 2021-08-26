import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]=[
    new Quote(1, 'Wendy', 'Having a soft heart is not weakness,its courage', 'Grace', 'Courage'),
    new Quote(2,'Richard','On the other side of fear lies freedom', 'Nelson','Freedom'),
    new Quote(3,'Suzan','Live life to express not to impress','Meghan M' ,'Self-discipline'),
    new Quote(4,'Maureen','Work for a cause not applause', 'Limumba P','Determination'),
    new Quote(5,'Kimathi','Limits like fears are often just an illusion','Michael J',  'Brave'),
  ];
toggleDetails(index: any){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
readQuote(isRead: any, index: number){
    if (isRead) {
      this.quotes.splice(index,1);
    }
  }

  constructor() { }

  ngOnInit() {
  }

}


