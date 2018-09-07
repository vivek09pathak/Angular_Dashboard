import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-dashboard-airport',
  templateUrl: './dashboard-airport.component.html',
  styleUrls: ['./dashboard-airport.component.css']
})
export class DashboardAirportComponent implements OnInit {

  @ViewChild('videoPlayer') videoplayer: any;

  process = false;

  toggleVideo(event: any) {
    this.process = true;
    this.videoplayer.nativeElement.play();
  }
  constructor() { }



  ngOnInit() {
  }

}
