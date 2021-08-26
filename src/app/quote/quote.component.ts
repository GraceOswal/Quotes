import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[]=[
    {id:1, name:'Wendy',quote:'Having a soft heart is not weakness,its courage',author: 'Grace', showInfo:'Courage'},
    {id:2,name:'Richard',quote:'On the other side of fear lies freedom',author: 'Nelson',showInfo:'Freedom'},
    {id:3,name:'Suzan',quote:'Live life to express not to impress',author: 'Meghan M' ,showInfo:'Self-discipline'},
    {id:4,name:'Maureen',quote:'Work for a cause not applause', author: 'Limumba P',showInfo:'Determination'},
    {id:5,name:'Kimathi',quote:'Limits like fears are often just an illusion',author:'Michael J', showInfo: 'Brave'},
  
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
