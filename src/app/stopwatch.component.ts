import { Component} from '@angular/core';

@Component({
  templateUrl: './stopwatch.html',
  styleUrls:['./stopwatch.css']
  
})
export class StopWatchComponent  {
    
  controlBtnText="Start";
  hour=0;
  minute=0;
  second=0;
  millisecond=0;
  start=false;
  pause=false;
  x=10;
  intervalId;


  reset(){
      this.x=0;
      this.controlBtnText="Start";
      this.hour=this.minute=this.second=this.millisecond=0;
      this.start=false;
      this.pause=false;
  }

  onStart(){
     this.x=10;
     this.start=true;
     this.intervalId=setInterval(()=>{
       this.updateTime();
     },100);
  }
  
  onPause(){
    this.pause=true;
    this.controlBtnText="Resume"; 
    clearInterval(this.intervalId);
  }
  onResume(){
    this.controlBtnText="Stop"; 
     this.pause=false;
     //this.updateTime();
     this.intervalId=setInterval(()=>{
       this.updateTime();
     },100);
    
  }

  updateTime(){
    
    this.millisecond+=this.x;

    if(this.millisecond>90){
        this.millisecond=0;
        this.second++;
    }

    if(this.second>59){
        this.second=0;
        this.minute++;
    }

    if(this.minute>59){
        this.minute=0;
        this.hour++;
    }

  }

}
