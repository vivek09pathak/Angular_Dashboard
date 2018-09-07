import { Component, OnInit } from '@angular/core';
import { DashBarChartService } from './dash-bar-chart.service';

@Component({
  selector: 'app-dash-bar-chart',
  templateUrl: './dash-bar-chart.component.html',
  styleUrls: ['./dash-bar-chart.component.css']
})
export class DashBarChartComponent implements OnInit {

  detected = 100
  identified = 25;

  single: any[];


  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = '';
  showYAxisLabel = false;
  yAxisLabel = 'Suspiscious Activities';

  colorScheme = {
    domain: ['#2979ffAA', '#ff1744AA', '#00e676AA', '#AAAAAA']
  };

  constructor(private dashBarChartService:DashBarChartService) {

  }

  update(detected, identified){
    this.detected += detected;
    this.identified += identified;
    this.single = [
    {
      "name": "Detected",
      "value": this.detected
    },
    {
      "name": "Under Scrutiny",
      "value": this.detected - this.identified
    },
    {
      "name": "Identified",
      "value": this.identified
    }
  ]
    // console.log(this.single);
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
    this.dashBarChartService.getSubject().subscribe((value:Number[])=>{
      this.update( value[0], value[1]);
    });
  }





}
