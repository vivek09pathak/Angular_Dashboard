import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-donut',
  templateUrl: './dash-donut.component.html',
  styleUrls: ['./dash-donut.component.css']
})
export class DashDonutComponent implements OnInit {

  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor() {
    this.single = [
      {
        "name": "Germany",
        "value": 8940000
      },
      {
        "name": "USA",
        "value": 5000000
      },
      {
        "name": "France",
        "value": 7200000
      }
    ];
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
  }

}