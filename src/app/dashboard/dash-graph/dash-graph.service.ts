import { Injectable } from '@angular/core';
import { Observable, of, interval, Subject } from 'rxjs';

@Injectable()
export class DashGraphService {

  private refresh = interval(1000);

  // crowd: Array<any> = [
  //   [65, 59, 80, 81, 56, 55, 40],
  //   [28, 48, 40, 19, 86, 27, 90]
  // ];
  // cyan: Array<any> = [];
  // yellow: Array<any> = [];
  

  // $crowd = of([this.cyan, this.yellow]);
  // $time : Subject<Date> = new Subject();
  // $area1 : Subject<Number> = new Subject();
  // $area2 : Subject<Number> = new Subject();

  $subject : Subject<any[]> = new Subject();


  constructor() {
    this.refresh.subscribe(() =>
      this.fetch()
    );
  }

  fetch(){
    var crowd = [new Date(), Math.round(Math.random() * 100), Math.round(Math.random() * 100),Math.round(Math.random() * 100)]

    this.$subject.next(crowd);

    // console.log(this.crowd);
  }

  public getSubject():Subject<any[]>{
    return this.$subject;
  }
}