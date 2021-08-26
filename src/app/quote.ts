export class Quote {
 showDescription: boolean;

  constructor (
    public id:number,
    public name: string,
    public quote:string,
     public author: string,
     public description : string,
     public postedDate: Date
     ){
       this.showDescription=false;
     }
}
