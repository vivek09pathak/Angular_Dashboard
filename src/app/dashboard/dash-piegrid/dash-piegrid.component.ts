import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dash-piegrid',
  templateUrl: './dash-piegrid.component.html',
  styleUrls: ['./dash-piegrid.component.css']
})
export class DashPiegridComponent implements OnInit {

  single: any[];
  multi: any[];

  // view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Terminal';
  showYAxisLabel = true;
  yAxisLabel = 'Unattended Baggages';

  colorScheme = {
    domain: ['#5AA454', '#C7B42C', '#A10A28', '#AAAAAA']
  };

  // line, area
  autoScale = true;

  constructor() {
    this.single = [
      {
        'name': '5 mins',
        'value': 31
      },
      {
        'name': '15 mins',
        'value': 12
      },
      {
        'name': '30+ mins',
        'value': 2
      }
    ];

  }

  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
  }

}
