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

declare var require: any;
declare var dataval: any;
const root_url = 'http://localhost:5000/activity/process/ship/'


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

const progress_bar = 'http://127.0.0.1:5000/activity/progress/ship/';

@Component({
  selector: 'app-nutreco-ship',
  templateUrl: './nutreco-ship.component.html',
  styleUrls: ['./nutreco-ship.component.css']
})
export class NutrecoShipComponent {
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
    { value: 'Video_1', viewValue: 'Near Ship' },
    { value: 'Video_2', viewValue: 'Far Ship' }
  ];
  videos: Video[] = [
    { value: 'test.mp4', viewValue: 'Video_1' },
    { value: 'test_2.mp4', viewValue: 'Video_2' }
    // { value: 'Video_4', viewValue: 'Video_4' }
  ];
  out_videos: OVideo[] = [
    { value: 'final_data/Ship/result9.mp4', viewValue: 'Video_1' },
    { value: 'final_data/Ship/result9.mp4', viewValue: 'Video_2' }
    // { value: 'Video_4', viewValue: 'Video_4' }
  ];

 time_stamp: Video[] = [
    { value: ',00:00:00.00,00:00:13.00', viewValue: 'Video_1'},
    { value: ',00:00:35.00,00:00:39.00', viewValue: 'Video_2'}
  ];

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
  public dataval:any ={};
  public pathfile = {};

  onmodelChange(deviceValue) {
    this.hide1 = true;
    this.hide2=false;
    this.hide3=false;
    this.hide4=false;
    this.hide5=false;
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
    
    this.value_progress = this.backendapi.getprogress_ship();
    this.backendapi.getSubject2().subscribe((value: any) => {
      this.value_progress=value;});
    // if(this.value_progress!==100)
    // {
    //   this.hide4=true;
    //   this.hide2 =false;
    // }
    this.hide1=false;
    this.hide3= true;
    this.oresult=this.out_videos.filter(x => x.viewValue == this.selected_video)[0].value;
    // this.dataval=this.datafiles.filter(x => x.viewValue == this.selected_video)[0].value;
    // this.datachart();
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
