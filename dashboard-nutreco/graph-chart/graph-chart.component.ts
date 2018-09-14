import { Component, OnInit } from '@angular/core';
import * as shape from 'd3-shape';
declare var require: any;
declare var dataval: any;

export interface DataFile {
  value: object;
  viewValue: string;
}

@Component({
  selector: 'app-graph-chart',
  templateUrl: './graph-chart.component.html',
  styleUrls: ['./graph-chart.component.css']
})
export class GraphChartComponent implements OnInit {

  datafiles: DataFile[] = [
    { value: require('../../../assets/final_data/maldivian1/data_disp.json'), viewValue: 'Video_1' },
    { value: require('../../../assets/final_data/maldivian2/data_disp.json'), viewValue: 'Video_2' }
    // { value: require('../../assets/final_data/maldivian3/data_disp.json'), viewValue: 'Video_3' },
    // { value: require('../../assets/final_data/net_fishing1/data_disp.json'), viewValue: 'Video_4' },
    // { value: require('../../assets/final_data/net_fishing2/data_disp.json'), viewValue: 'Video_5' },
    // { value: require('../../assets/final_data/net_fishing3/data_disp.json'), viewValue: 'Video_6' },
    // { value: require('../../assets/final_data/net_fishing4/data_disp.json'), viewValue: 'Video_7' },
    // { value: require('../../assets/final_data/net_fishing5/data_disp.json'), viewValue: 'Video_8' },
    // { value: require('../../assets/final_data/ppl_fishing_1/data_disp.json'), viewValue: 'Video_9' },
    // { value: require('../../assets/final_data/ppl_fishing_2/data_disp.json'), viewValue: 'Video_10' },
    // { value: require('../../assets/final_data/ppl_fishing_3/data_disp.json'), viewValue: 'Video_11' },
    // { value: require('../../assets/final_data/ppl_fishing4/data_disp.json'), viewValue: 'Video_12' }
  
    // { value: 'Video_4', viewValue: 'Video_4' }
    ];

    public dataval:any ={};
  public pathfile = {};
  public lengthNumber =[];
  public dats:any ={}; 
  
  curve: any = shape.curveBasis; 
  data_val: any[] = [
    {
      name: 'People',
      series: [
        {
          name: 0,
          value: 0
        }
      ]
    },
    {
      name: 'Fishing',
      series: [
        {
          name: 0,
          value: 0
        }
      ]
    },
    {
      name: 'Not Fishing',
      series: [
        {
          name: 0,
          value: 0
        }
      ]
    },
    {
      name: 'Geared',
      series: [
        {
          name: 0,
          value: 0
        }
      ]
    },
    {
      name: 'Not Geared',
      series: [
        {
          name: 0,
          value: 0
        }
      ]
    }
  ];
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Per_Frame';
  showYAxisLabel = true;
  yAxisLabel = 'Persons';
  timeline = false;

  colorScheme = {
    domain: ['#00e676AA', '#ff1744AA', '#2979ffAA', '#AAAAAA']
  };



  // line, area
  autoScale = true;
  
  constructor() { }
  update() {
    this.dats=this.datafiles[0].value;
    console.log(this.dats.people.length)
    this.lengthNumber=[]
    for (let i = 0; i < this.dats.people.length; i++)
    {
      
      this.data_val[0]['series'].push({ name: i, value: this.dats.people[i] })
      this.data_val[1]['series'].push({ name: i, value: this.dats.fishing[i] })
      this.data_val[2]['series'].push({ name: i, value: this.dats.not_fishing[i] })
      this.data_val[3]['series'].push({ name: i, value: this.dats.geared[i] })
      this.data_val[4]['series'].push({ name: i, value: this.dats.not_geared[i] })
    }
    
    // console.log(this.dats,this.lengthNumber)
    // this.data_val = [...this.data_val]
}
  ngOnInit() {
    this.update()
  }

}
