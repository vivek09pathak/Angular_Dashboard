import { Component, OnInit, Input } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component'
@Component({
  selector: 'app-accessbar',
  templateUrl: './accessbar.component.html',
  styleUrls: ['./accessbar.component.css']
})
export class AccessbarComponent implements OnInit {


  @Input() appNavbar: NavbarComponent
  public toggleCallback: Function;

  displayName:string;
  displayPic:string;
  messages:string;
  notifications:string;
  
  constructor() { 
    this.displayName="Alice";
    this.displayPic="https://img00.deviantart.net/e7d3/i/2016/357/2/1/_cm____cuppycakiie_by_kirimatsu-daskshu.png";
    this.messages = "4";
    this.notifications="2";
  }

  ngOnInit() {
    this.toggleCallback = this.toggle.bind(this);
  }

  toggle() {
    this.appNavbar.toggle()
  }

}
