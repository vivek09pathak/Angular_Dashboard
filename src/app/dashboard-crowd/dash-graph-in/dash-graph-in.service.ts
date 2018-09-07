import {Injectable} from '@angular/core';
import {Observable, of, interval, Subject} from 'rxjs';
import {Http, Response} from '@angular/http';
import {HttpModule} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

const counts = [24, 27, 27, 30, 31, 31, 28, 27, 25, 24, 25, 26, 27, 26, 25, 23, 25, 27, 29];
const counter = 0;
const API_URL = 'https://192.168.42.215:5002/crowdcount';

@Injectable()
export class DashGraphInService {


  private refresh = interval(1000);

  $subject: Subject<any[]> = new Subject();

  constructor(private http: Http) {
    this.refresh.subscribe(() =>
      this.fetch()
    );
  }

  public getCount() {
    let data;
    // console.log('In count');
    const v = this.http.get(API_URL).map(res => res)
      .subscribe(data => {
        const crowd = [new Date(), JSON.parse(data['_body'])['msg']];
        this.$subject.next(crowd);
      });
  }

  fetch() {
    const crowd = [new Date(), counts[counter]];
    // this.$subject.next(crowd);
    // counter++;
    // if(counter==counts.length){
    //   counter = 0;
    // }
    this.getCount();
  }

  public getSubject(): Subject<any[]> {
    return this.$subject;
  }

}
