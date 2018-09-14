import { Component, ElementRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VERSION } from '@angular/material';
declare var require: any;
declare var dataval: any;

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

@Component({
  selector: 'app-nutreco-age',
  templateUrl: './nutreco-age.component.html',
  styleUrls: ['./nutreco-age.component.css']
})
export class NutrecoAgeComponent {
  name = 'Angular';
  selected_video = {};
  result={};
  oresult={};
  year = [];
  count = [];
  public selected = 'View Different Model';
  models: Model[] = [
    { value: 'Video_1', viewValue: 'Age' },
    { value: 'Video_2', viewValue: 'Gender' }
  ];
  videos: Video[] = [
    { value: 'final_data/Ship/test.mp4', viewValue: 'Video_1' },
    { value: 'final_data/Ship/test.mp4', viewValue: 'Video_2' }
    // { value: 'Video_4', viewValue: 'Video_4' }
  ];
  out_videos: OVideo[] = [
    { value: 'final_data/Ship/result9.mp4', viewValue: 'Video_1' },
    { value: 'final_data/Ship/result9.mp4', viewValue: 'Video_2' }
    // { value: 'Video_4', viewValue: 'Video_4' }
  ];

  // datafiles: DataFile[] = [
  // { value: require('../../assets/final_data/maldivian1/data_disp.json'), viewValue: 'Video_1' },
  // { value: require('../../assets/final_data/maldivian2/data_disp.json'), viewValue: 'Video_2' }

  // { value: 'Video_4', viewValue: 'Video_4' }
  // ];
  hide1: boolean = false;
  hide2: boolean = false;
  hide3: boolean = false;
  public dataval:any ={};
  public pathfile = {};
  onmodelChange(deviceValue) {
    this.hide1 = true;
    this.hide2=false;
    this.hide3=false;
    this.selected_video = this.models.filter(x => x.value == deviceValue)[0].value;
    this.result=this.videos.filter(x => x.viewValue == this.selected_video)[0].value;
  }
    btn_change(deviceValue) {

    this.hide2 = true;
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
  // ngOnInit() {
  //   this.httpClient.get(this.url).subscribe((res: Data[]) => {
  //     this.data = res.filter(r => {
  //       return r.name === 'Python';
  //     });
  //     this.data.forEach(y => {
  //       this.year.push(y.year);
  //       this.count.push(y.count);
  //     });
  //   });
  // }


}
