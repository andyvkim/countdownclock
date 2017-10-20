

export class Day{
  day:string;
  isActive:boolean;
  more:boolean;

  constructor(d:string,active:boolean=false,more:boolean=true){
    this.day=d;
    this.isActive=active;
    this.more=more;
  }

  
}