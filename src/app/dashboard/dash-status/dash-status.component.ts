import { Component, OnInit, Input } from '@angular/core';
import { DashStatusService } from './dash-status.service'


@Component({
  selector: 'app-dash-status',
  templateUrl: './dash-status.component.html',
  styleUrls: ['./dash-status.component.css']
})
export class DashStatusComponent implements OnInit {

  @Input()icon:string;
  @Input()label:string;
  @Input()color:string;
  
  value:string;

  constructor(private dashStatusService:DashStatusService ) { }
  ngOnInit() {
    this.dashStatusService.getFor(this.label).subscribe(value=> this.value = value);
  }



}