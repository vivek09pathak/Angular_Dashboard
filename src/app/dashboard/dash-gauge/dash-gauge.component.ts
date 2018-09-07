import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dash-gauge',
  templateUrl: './dash-gauge.component.html',
  styleUrls: ['./dash-gauge.component.css']
})
export class DashGaugeComponent implements OnInit {

  view: any[] = [700, 400];
  data: any[];

  constructor() {
    this.data =
      [
        {
          'name': 'Camera Failure',
          'value': 3
        },
        {
          'name': 'Excess Crowd',
          'value': 7
        },
        {
          'name': 'Suspiscious Activiy',
          'value': 4
        },
        {
          'name': 'Abandoned Baggage',
          'value': 8
        },
        {
          'name': 'Inactive Security Personnel',
          'value': 5
        },
        {
          'name': 'Sharp Objects/ Weopens',
          'value': 9
        }
      ];
  }

  colorScheme = 'air';

  onSelect(event) {
    console.log(event);
  }


  ngOnInit() {
  }

}
