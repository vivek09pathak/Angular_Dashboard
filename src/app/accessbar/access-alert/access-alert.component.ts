import { Component, OnInit, Input } from '@angular/core';
import { Alert, AlertService } from '../../services/alert.service';
import { Observable } from 'rxjs';

export interface Section {
  icon: string;
  message: string;
  time: Date;
}

@Component({
  selector: 'app-access-alert',
  templateUrl: './access-alert.component.html',
  styleUrls: ['./access-alert.component.css']
})
export class AccessAlertComponent implements OnInit {

  @Input() label: string;
  @Input() icon: string;

  badge: string;
  alerts: Alert[];

  constructor(private alertService: AlertService) {
  }


  ngOnInit() {
    this.alertService.getObservable().subscribe(alerts => this.alerts = alerts)
  }






  onClick() {
    // this.badge = "";
  }

}