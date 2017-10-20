import { Component,OnInit} from '@angular/core';
import{AngularFireDatabase} from 'angularfire2/database'
import * as moment from 'moment';
@Component({
  templateUrl: './digitalClock.html',
  styleUrls:['./digitalClock.css']

})
export class DigitalClockComponent implements OnInit{
db = AngularFireDatabase;
   private currentTime="00:00:00";
   intervalId;

   constructor(db : AngularFireDatabase){
     this.showDigitalClock;
   }
   showDigitalClock(){
       this.currentTime=moment().format('hh:mm:ss');
       this.intervalId= setInterval(()=>{
        this.showDigitalClock();
       },1000);

   }

   ngOnInit(): void {
       this.showDigitalClock();
    }

   ngOnDestroy(){
       clearInterval(this.intervalId);
   }

}
