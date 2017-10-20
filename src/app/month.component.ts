import { Component,OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {Day } from './day';
import * as moment from "moment";


@Component({
  templateUrl: './monthComponent.html',
  styleUrls: ['./monthComponent.css']
})

export class MonthComponent implements OnInit {
 
constructor(private route:ActivatedRoute,private router:Router){}
  
 daysName= ["Sunday",
 "Monday",
 "Tuesday",
 "Wednesday",
 "Thursday",
 "Friday",
 "Saturday"];
  
  days:Day[]=[];
  monthId:number=0; 
  adjust:number=0;
  currentMonth:string;
  currentYear:string;
  time:string="currTime";
  week1:Day[]=[];
  week2:Day[]=[]; 
  week3:Day[]=[]; 
  week4:Day[]=[];
  week5:Day[]=[]; 
  week6:Day[]=[];


  onClickMonth(){
     this.router.navigate(['/monthList',this.currentYear]);
     
  }
  onClickYear(){
      this.router.navigate(['/yearList']);
  }
  displayCalender(){
       
       this.currentMonth=moment().add(this.adjust,'month').format('MMMM');
       this.currentYear=moment().add(this.adjust,'month').format('YYYY');
       let count=42;
       let i=0;
       let startOfWeek=parseInt(moment().add(this.adjust,'month').startOf("month").startOf('week').format('D'));
       let currObj:string;
       //days of previous month
       if(startOfWeek!=1){
         let daysInPreviousMonth=parseInt(moment().add(this.adjust,'month').subtract(1,"month").endOf("month").format('D'));
         
         let curr=parseInt(moment().add(this.adjust,'month').startOf("month").startOf('week').format('D'));
         currObj=moment().add(this.adjust,'month').startOf("month").startOf('week').format('D');

         while(curr<=daysInPreviousMonth){
               this.days.push(new Day(currObj));
               count--;
               i++;
               curr++;
               
               currObj=moment().add(this.adjust,'month').startOf("month").startOf('week').add(i,'days').format('D');

         }
       }
        
        //days of current month
        let daysInCurrentMonth = parseInt(moment().add(this.adjust,'month').endOf("month").format('D')); 
        i=0;

        currObj = moment().add(this.adjust,'month').startOf("month").add(i,'days').format('D');

        while(i<daysInCurrentMonth)
        {
           this.days.push(new Day(currObj,true));
           count--;
           i++;
           currObj = moment().add(this.adjust,'month').startOf("month").add(i,'days').format('D');
             
        }

        //days of next month
        i=1;
        let endOfLastWeek = parseInt(moment().add(this.adjust,'month').endOf('month').endOf('week').format('D'));
        currObj = moment().add(this.adjust,'month').endOf("month").add(i,'days').format('D');
        while(i<=endOfLastWeek ||count>0)
        {
          this.days.push(new Day(currObj));
          count--;
          i++;
          currObj = moment().add(this.adjust,'month').endOf("month").add(i,'days').format('D');
        }

      //this.divideIntoWeek();
  }
  
  divideIntoWeek(){
   
    for(let i=0;i<42;i++){

      let week = Math.floor(i/7);
    
      switch(week){
        case 0: this.week1.push(this.days[i]);break;
        case 1: this.week2.push(this.days[i]);break;
        case 2: this.week3.push(this.days[i]);break;
        case 3: this.week4.push(this.days[i]);break;
        case 4: this.week5.push(this.days[i]);break;
        case 5: this.week6.push(this.days[i]);
      }
    }

   
  }
  nextMonth(){
    this.adjust+=1;
    this.emptyObjects();
    this.displayCalender();
    this.divideIntoWeek();
    console.log("nextMonth");
  }
  previousMonth(){
    this.adjust-=1;
    this.emptyObjects();
    this.displayCalender();
    this.divideIntoWeek();
  
  }
  
  emptyObjects(){
   this.days=[];
   this.week1=[];
   this.week2=[];
   this.week3=[];
   this.week4=[];
   this.week5=[];
   this.week6=[];
  }
 

   ngOnInit(): void {
   
     this.displayCalender();
     let id = this.route.snapshot.params['monthId'];
     let currMonthId = parseInt(moment().format('M'));
     this.adjust-=id;
     this.days=[];
     this.displayCalender();
     this.divideIntoWeek();
  }
 
}
