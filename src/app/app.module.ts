import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ClockComponent } from "app/clock.component";
import { AppRoutingModule } from "./app-routing.module";
import { TimerComponent } from "app/timer.component";
import { AngularFireModule } from 'angularfire2';
import { DigitalClockComponent } from "app/digitalClock.component";
import { StopWatchComponent } from "app/stopwatch.component";
import {AnalogClockComponent} from "./analogClock.component";
import {MonthComponent} from "./month.component";
import {MonthListComponent} from './monthList.component';
import { YearListComponent } from "app/yearList.component";
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
  declarations: [
    AppComponent,
    ClockComponent,
    TimerComponent,
    DigitalClockComponent,
    StopWatchComponent,
    AnalogClockComponent,
    MonthComponent,
    MonthListComponent,
    YearListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
