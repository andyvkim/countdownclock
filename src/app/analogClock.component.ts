import { Component,OnInit ,ViewChild} from '@angular/core';
import * as moment from 'moment';

@Component({
  templateUrl: './analogClock.html',
  styleUrls:['./digitalClock.css']
 
  
})
export class AnalogClockComponent implements OnInit {
    
  time:string="Current Time";
  centerX=210;
  centerY=210;
  hourHand=100;
  minuteHand=150;
  secondHand=170;
  dialRadius=180;
  a=Math.sin(90);
  hour=0;
  minute=0;
  second=0;
  context;

  @ViewChild("myCanvas") myCanvas;

  ngAfterViewInit() {

    let canvas = this.myCanvas.nativeElement;
    this.context = canvas.getContext("2d");

    this.startClock();
  }

  startClock(){
    setInterval(()=> {
            this.showDial();
            this.showClock(); 
          },1000); 

            // this.showClock();

  }
  toRadian(angle){

    return (angle*Math.PI)/180;
  }

  showDial(){
    
     var ctx = this.context;
     ctx.clearRect(0,0,400,400);
     ctx.shadowBlur=10;
      ctx.shadowOffsetX=10;
      ctx.shadowOffsetY=10;
      ctx.shadowColor="rgb(200,200,200)";
     ctx.beginPath();
     ctx.arc(this.centerX,this.centerY,20,0,2*Math.PI);
     ctx.fillStyle = "black";
     ctx.fill();

     ctx.font="20px Arial"
     
     const arr:string[]=["0","I","II","*","IV","V","*","VII","VIII","*","X","XI","**"];
    
     for(let i=1;i<=12;i++){
      // if(i%3!=0){
        let x= Math.round(this.centerX + this.dialRadius*Math.sin(this.toRadian(i*30)));
        let y= Math.round(this.centerX - this.dialRadius*Math.cos(this.toRadian(i*30)));
         ctx.fillText(arr[i],x,y)
         //console.log(x,y);
      // }
    }
    
    // ctx.beginPath();
    // ctx.arc(this.centerX,this.centerY,this.dialRadius+20,0,2*Math.PI);
    // ctx.stroke();
  
     
     
  }

  showClock(){

    var ctx = this.context;
   

     this.hour=parseInt(moment().format('h'));
     this.minute=parseInt(moment().format('m'));
     this.second=parseInt(moment().format('s'));

     const sX:number= Math.round(this.centerX + this.secondHand*Math.sin(this.toRadian(this.second*6)));
     const sY:number= Math.round(this.centerY - this.secondHand*Math.cos(this.toRadian(this.second*6)));

     const mX:number= Math.round(this.centerX + this.minuteHand*Math.sin(this.toRadian(this.minute*6)));
     const mY:number= Math.round(this.centerY - this.minuteHand*Math.cos(this.toRadian(this.minute*6)));

     const hX:number= Math.round(this.centerX + this.hourHand*Math.sin(this.toRadian(this.hour*30 + this.minute*0.5)));
    // const hY:number= Math.round(this.centerY - this.hourHand*Math.cos(this.hour*30 + this.minute*0.5));
    const hY:number= Math.round(this.centerY - this.hourHand*Math.cos(this.toRadian(this.hour*30 + this.minute*0.5)));

     
     ctx.beginPath();
    ctx.shadowColor="rgb(100,100,100)";
    ctx.fillStyle="rgb(0, 68, 102)";
     //for second hand
     ctx.lineWidth=1;
     ctx.shadowOffsetX=30;
     ctx.shadowOffsetY=30;
     ctx.moveTo(this.centerX,this.centerY);
     ctx.lineTo(sX,sY);
     ctx.stroke();

     //for minute hand
     ctx.beginPath();
     ctx.lineWidth=4;
     ctx.shadowOffsetX=20;
     ctx.shadowOffsetY=20;
     ctx.moveTo(this.centerX,this.centerY);
     ctx.lineTo(mX,mY);
     ctx.stroke();

     //for hour hand
     ctx.beginPath();
     ctx.lineWidth=6;
     ctx.shadowOffsetX=10;
     ctx.shadowOffsetY=10;
     ctx.moveTo(this.centerX,this.centerY);
     ctx.lineTo(hX,hY);
     ctx.stroke();

     //center
    
    
    //console.log(this.hour,this.minute,this.second,hX,hY,mX,mY,sX,sY);

  }
     
    
    
    ngOnInit(): void {

      this.time=moment().format('hh:mm:ss');
       
    }

    
      
   

}
