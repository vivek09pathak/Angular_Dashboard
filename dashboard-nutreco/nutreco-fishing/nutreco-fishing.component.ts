import { Component, ElementRef } from '@angular/core';
import {Injectable} from '@angular/core';
import {Observable, of, interval, Subject} from 'rxjs';
import { HttpClient,HttpParams } from '@angular/common/http';
import { VERSION } from '@angular/material';
import {Http, Response} from '@angular/http';
import {HttpModule} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { BackendApiService } from '../../services/backend-api.service';
import * as shape from 'd3-shape';

declare var require: any;
declare var dataval: any;
const root_url = 'http://localhost:5000/activity/process/'


declare var require: any;
declare var dataval: any;

export interface DataFile {
  value: object;
  viewValue: string;
}
export interface Model {
  value: string;
  viewValue: string;
}
export interface Video {
  value: string;
  viewValue: string;
}
export interface OVideo {
  value: string;
  viewValue: string;
}
export interface DataFile {
  value: object;
  viewValue: string;
}

const progress_bar = 'http://127.0.0.1:5000/activity/progress/';


@Component({
  selector: 'app-nutreco-fishing',
  templateUrl: './nutreco-fishing.component.html',
  styleUrls: ['./nutreco-fishing.component.css']
})
export class NutrecoFishingComponent{
  name = 'Angular';
  selected_video = {};
  result: string;
  oresult={};
  year = [];
  count = [];
  value_progress: any=-1;
  req_url: string;
  timestamp: string;


  //$subject: Subject<any[]> = new Subject();
  constructor(private backendapi: BackendApiService){
  }
  public selected = 'View Different Model';
  models: Model[] = [
    { value: 'Video_1', viewValue: 'Maldivian Fishing' },
    { value: 'Video_2', viewValue: 'Maldivian Fishing 2' },
    { value: 'Video_3', viewValue: 'Maldivian Fishing 3' },
    { value: 'Video_4', viewValue: 'Net fishing 1' },
    { value: 'Video_5', viewValue: 'Net fishing 2' },
    { value: 'Video_6', viewValue: 'Net fishing 3' },
    { value: 'Video_7', viewValue: 'Net fishing 4' },
    { value: 'Video_8', viewValue: 'Net fishing 5' },
    { value: 'Video_9', viewValue: 'People Fishing 1' },
    { value: 'Video_10', viewValue: 'People Fishing 2' },
    { value: 'Video_11', viewValue: 'People Fishing 3' },
    { value: 'Video_12', viewValue: 'People Fishing 4' }
    // { value: 'Video_4', viewValue: 'Video_4' }
];
  videos: Video[] = [

    { value: 'maldivian1.mp4', viewValue: 'Video_1' },
    { value: 'maldivian2.mp4', viewValue: 'Video_2' },
    { value: 'maldivian3.mp4', viewValue: 'Video_3' },
    { value: 'net_fishing1.mp4', viewValue: 'Video_4' },
    { value: 'net_fishing2.mp4', viewValue: 'Video_5' },
    { value: 'net_fishing3.mp4', viewValue: 'Video_6' },
    { value: 'net_fishing4.mp4', viewValue: 'Video_7' },
    { value: 'net_fishing5.mp4', viewValue: 'Video_8' },
    { value: 'ppl_fishing_1.mp4', viewValue: 'Video_9' },
    { value: 'ppl_fishing_2.mp4', viewValue: 'Video_10' },
    { value: 'ppl_fishing_3.mp4', viewValue: 'Video_11' },
    { value: 'ppl_fishing4.mp4', viewValue: 'Video_12' }
    // { value: 'Video_4', viewValue: 'Video_4' }
];
  out_videos: OVideo[] = [
    { value: 'output/processed.mp4', viewValue: 'Video_1' },
    { value: 'final_data/Ship/result9.mp4', viewValue: 'Video_2' }
    // { value: 'Video_4', viewValue: 'Video_4' }
  ];

  time_stamp: Video[] = [
    { value: ',00:00:00.00,00:00:20.00', viewValue: 'Video_1'},
    { value: ',00:00:00.00,00:00:33.00', viewValue: 'Video_2'},
    { value: ',00:00:00.00,00:00:26.00', viewValue: 'Video_3'},
    { value: ',00:00:00.00,00:00:48.00', viewValue: 'Video_4'},
    { value: ',00:00:00.00,00:00:36.00', viewValue: 'Video_5'},
    { value: ',00:00:00.00,00:00:55.00', viewValue: 'Video_6'},
    { value: ',00:00:00.00,00:00:22.00', viewValue: 'Video_7'},
    { value: ',00:00:00.00,00:01:04.00', viewValue: 'Video_8'},
    { value: ',00:00:00.00,00:00:09.00', viewValue: 'Video_9'},
    { value: ',00:00:00.00,00:00:14.00', viewValue: 'Video_10'},
    { value: ',00:00:00.00,00:00:10.00', viewValue: 'Video_11'},
    { value: ',00:00:00.00,00:00:29.00', viewValue: 'Video_12'}
  ];
  datafiles: DataFile[] = [
    { value: require('../../../assets/final_data/maldivian1/data_disp.json'), viewValue: 'Video_1' },
    { value: require('../../../assets/final_data/maldivian2/data_disp.json'), viewValue: 'Video_2' },
    { value: require('../../../assets/final_data/maldivian3/data_disp.json'), viewValue: 'Video_3' },
    { value: require('../../../assets/final_data/net_fishing1/data_disp.json'), viewValue: 'Video_4' },
    { value: require('../../../assets/final_data/net_fishing2/data_disp.json'), viewValue: 'Video_5' },
    { value: require('../../../assets/final_data/net_fishing3/data_disp.json'), viewValue: 'Video_6' },
    { value: require('../../../assets/final_data/net_fishing4/data_disp.json'), viewValue: 'Video_7' },
    { value: require('../../../assets/final_data/net_fishing5/data_disp.json'), viewValue: 'Video_8' },
    { value: require('../../../assets/final_data/ppl_fishing_1/data_disp.json'), viewValue: 'Video_9' },
    { value: require('../../../assets/final_data/ppl_fishing_2/data_disp.json'), viewValue: 'Video_10' },
    { value: require('../../../assets/final_data/ppl_fishing_3/data_disp.json'), viewValue: 'Video_11' },
    { value: require('../../../assets/final_data/ppl_fishing4/data_disp.json'), viewValue: 'Video_12' }
  
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
  


  // datafiles: DataFile[] = [
  // { value: require('../../assets/final_data/maldivian1/data_disp.json'), viewValue: 'Video_1' },
  // { value: require('../../assets/final_data/maldivian2/data_disp.json'), viewValue: 'Video_2' }

  // { value: 'Video_4', viewValue: 'Video_4' }
  // ];
  hide1: boolean = false;
  hide2: boolean = false;
  hide3: boolean = false;
  hide4: boolean = false;
  hide5: boolean = false;

  onmodelChange(deviceValue) {
    this.hide1 = true;
    this.hide2=false;
    this.hide3=false;
    this.hide4=false;
    this.hide5 = false;
    this.selected_video = this.models.filter(x => x.value == deviceValue)[0].value;
    this.result=this.videos.filter(x => x.viewValue == this.selected_video)[0].value;
    this.timestamp=this.time_stamp.filter(x => x.viewValue == this.selected_video)[0].value;
  }
    btn_change(deviceValue) {
    this.hide2=true;
    this.hide4=true;    
    this.hide5=true;
    this.req_url = root_url.concat(this.result);
    this.req_url = this.req_url.concat(this.timestamp)
    this.backendapi.getvideo(this.req_url);
    
    this.value_progress = this.backendapi.getprogress();
    this.backendapi.getSubject().subscribe((value: any) => {
      this.value_progress=value;});
    // if(this.value_progress!==100)
    // {
    //   this.hide4=true;
    //   this.hide2 =false;
    // }
    this.hide1=false;
    this.hide3= true;
    // this.oresult=this.out_videos.filter(x => x.viewValue == this.selected_video)[0].value;
    this.dataval=this.datafiles.filter(x => x.viewValue == this.selected_video)[0].value;
    console.log(this.dataval)
    this.update();
  }

    update() {
    this.dats=[];
    this.dats=this.dataval;
    console.log(this.dats.people)
    this.lengthNumber=[]
    for (let i = 0; i < this.dats.people.length; i++)
    {
      
      this.data_val[0]['series'].push({ name: i, value: this.dats.people[i] })
      this.data_val[1]['series'].push({ name: i, value: this.dats.fishing[i] })
      this.data_val[2]['series'].push({ name: i, value: this.dats.not_fishing[i] })
      this.data_val[3]['series'].push({ name: i, value: this.dats.geared[i] })
      this.data_val[4]['series'].push({ name: i, value: this.dats.not_geared[i] })
    }
    
  }
  // console.log(Math.max([1,2,3,4,5]));
  
  

    // data = [
    //  {
    //    title: "People",
    //    color: "light-blue",
    //    values: []
    //  }

    // ];

    // dataSet = {
    //  labels: [1,2,3,4],
    //  datasets: this.data
    // };



    // chart: any;


    // datachart(){
    //   this.data = [
    //    {
    //      title: "Ships",
    //      color: "light-blue",
    //      values: [1,2,1,2,2]
    //    }
    //  ];

    //  this.dataSet = {
    //    labels: [1,2,3,4],
    //    datasets: this.data,

    //  };
    // }
  ngOnInit() {
    // this.value_progress = this.backendapi.getprogress();
    // this.backendapi.getSubject().subscribe((value: any) => {
    //   this.value_progress=value;});
  }


}
