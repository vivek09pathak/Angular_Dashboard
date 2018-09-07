import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav
  
  showContent:string = 'dashboard'


  constructor() { }

  ngOnInit() {
  }

  toggle(){
    this.sidenav.toggle()
  }

}
