import {Component,OnInit} from '@angular/core';
import {  Route } from '@angular/router';
import {ActivatedRoute,Router} from '@angular/router';
import * as moment from "moment";

@Component({
   templateUrl:'./monthList.html',
   styleUrls:['./monthList.css']
})
        
export class MonthListComponent implements OnInit{
    

    months=[
        {id:1,name:"January"},
        {id:2,name:"February"},
        {id:3,name:"March"},
        {id:4,name:"April"},
        {id:5,name:"May"},
        {id:6,name:"June"},
        {id:7,name:"July"},
        {id:8,name:"August"},
        {id:9,name:"September"},
        {id:10,name:"October"},
        {id:11,name:"November"},
        {id:12,name:"December"},
        
        ];
    public selectedYear;
    
    constructor(private router:Router,private route:ActivatedRoute){}
   
    onSelect(monthId)  {
        let currYear=parseInt(moment().format('Y'));
        let currMonth=parseInt(moment().format('M'));

        let year=parseInt(this.selectedYear);
        
        let diff = (currYear-year)*12+(currMonth-monthId);
        
        console.log("type",typeof(this.selectedYear),typeof(monthId),currYear,diff);
        this.router.navigate(['/calender',diff]);
        
    }  
    goToYearList(){
         this.router.navigate(['/yearList']);
    }
    ngOnInit(): void {
        this.selectedYear  = this.route.snapshot.params['year'];
        
        console.log(this.selectedYear);
    }

  
}