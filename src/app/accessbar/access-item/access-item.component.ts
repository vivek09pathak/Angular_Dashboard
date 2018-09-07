import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-access-item',
  templateUrl: './access-item.component.html',
  styleUrls: ['./access-item.component.css']
})
export class AccessItemComponent implements OnInit {

  @Input()label:string;
  @Input()icon:string;
  @Input()clickCallback:Function;

  constructor() { }

  ngOnInit() {
  }



}