import { Injectable } from '@angular/core';
import { Observable, of, interval } from 'rxjs';

export class Alert {
  icon: string;
  message: string;
  time: Date;
  read: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AlertService {

  private refreshInterval = interval(5000);

  alerts: Alert[] = [];
  observable: Observable<Alert[]>

  constructor() {
    this.observable = of(this.alerts);
    // this.refreshInterval.subscribe(() =>
    //   this.fetch()
    // );
  }

  fetch() {
    // console.log("Hello");
    this.alerts.unshift({
      icon: "warning",
      message: "Suspicious activity detected",
      time: new Date(),
      read: false
    });
  }

  getObservable(): Observable<Alert[]> {
    return this.observable;
  }



}