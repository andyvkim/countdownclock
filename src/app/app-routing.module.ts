import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { ClockComponent } from "app/clock.component";
import { TimerComponent } from "app/timer.component";
import { DigitalClockComponent } from "app/digitalClock.component";
import { StopWatchComponent } from "app/stopwatch.component";
import {AnalogClockComponent} from "./analogClock.component";
import {MonthComponent} from "./month.component";
import {MonthListComponent} from './monthList.component';
import { YearListComponent } from "app/yearList.component";

 
const routes:Routes=[
  {path:'',redirectTo:'/digital',pathMatch:'full'},
  {path:'digital',component:DigitalClockComponent},
  {path:'analog',component:AnalogClockComponent},
  {path:'timer',component:TimerComponent},
  {path:'calender/:monthId',component:MonthComponent},
  {path:'monthList/:year',component:MonthListComponent},
  {path:'yearList',component:YearListComponent},
  {path:'stopwatch',component:StopWatchComponent},
  {path:'**',component:TimerComponent}

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})

export class AppRoutingModule{
    
}