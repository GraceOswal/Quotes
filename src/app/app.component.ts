import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes:Quote[]=[
    {id:1, name:'Having a soft heart is not weakness,its courage'},
    {id:2,name:'On the other side of fear lies freedom'},
    {id:3,name:'Live life to express not to impress'},
    {id:4,name:'Work for a cause not applause'},
    {id:5,name:'Limits like fears are often just an illusion'},
  
  ];
}
