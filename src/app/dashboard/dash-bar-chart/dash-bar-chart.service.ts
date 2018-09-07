import { Injectable } from '@angular/core';
import { Observable, of, interval, Subject } from 'rxjs';

@Injectable()
export class DashBarChartService {

  $detected: Subject<Number[]> = new Subject();

  $timer = interval(1000);
  constructor() {
    this.$timer.subscribe(()=>{
      this.fetch();
    });
  }

  fetch(){
    var detected = [Math.round(Math.random()),0];
    if(detected)
      detected[1]= Math.round(Math.random()*0.75);
      this.$detected.next(detected);
  }

  public getSubject():Subject<Number[]>{
    return this.$detected;
  }


}