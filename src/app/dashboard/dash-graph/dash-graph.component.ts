import { Component, OnInit, ViewChild } from '@angular/core';
import { DashGraphService } from './dash-graph.service'
import { Observable, of, interval } from 'rxjs';
import * as shape from 'd3-shape';


@Component({
  selector: 'app-dash-graph',
  templateUrl: './dash-graph.component.html',
  styleUrls: ['./dash-graph.component.css']
})
export class DashGraphComponent implements OnInit {


  curve: any = shape.curveBasis; 

  single_1: any[] = [
    {
      name: 'Termnal 1',
      series: [
        {
          name: 0,
          value: 0
        }
      ]
    },
    {
      name: 'Terminal 2',
      series: [
        {
          name: 0,
          value: 0
        }
      ]
    },
    {
      name: 'Terminal 3',
      series: [
        {
          name: 0,
          value: 0
        }
      ]
    }
  ];

  // view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Time';
  showYAxisLabel = true;
  yAxisLabel = 'Crowd Count';
  timeline = false;

  colorScheme = {
    domain: ['#00e676AA', '#ff1744AA', '#2979ffAA', '#AAAAAA']
  };



  // line, area
  autoScale = true;

  constructor(private dashGraphService: DashGraphService) {

  }

  update(time: Date, area1, area2, area3) {
    var area = this.single_1[0]['series']
    if (area.length > 15) {
      this.single_1[0]['series'].shift();
      this.single_1[1]['series'].shift();
      this.single_1[2]['series'].shift();
    }
    var name = "" /*+ time.getHours() + ":" + time.getMinutes() + ":" */ + time.getSeconds();
    this.single_1[0]['series'].push({ name: name, value: area1 })
    this.single_1[1]['series'].push({ name: name, value: area2 })
    this.single_1[2]['series'].push({ name: name, value: area3 })
    // console.log(this.single_1, area.length)
    this.single_1 = [...this.single_1]
  }

  onSelect(event) {
    // console.log(event);
  }



  ngOnInit() {
    this.dashGraphService.getSubject().subscribe((value: any[]) => {
      this.update(value[0], value[1], value[2],value[3]);
    });
  }
}