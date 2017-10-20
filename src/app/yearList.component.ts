import {Component,OnInit} from '@angular/core';
import {Router} from '@angular/router';
import * as moment from 'moment';

@Component({
   templateUrl:'./yearList.html',
   styleUrls:['./yearList.css']
})
        
export class YearListComponent implements OnInit{
    


    
    constructor(private router:Router){}
    yearList:number[]=[];
   
    onSelect(year)  {
           this.router.navigate(['/monthList',year]);
           console.log(year);
    }
       
    ngOnInit(): void {
        let currYear=parseInt(moment().format('Y'));
        
        for(let i=currYear-6;i<=currYear+5;i++)
        {
            this.yearList.push(i);
        }
    }

}