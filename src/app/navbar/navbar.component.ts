import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  private projectName: string;
  private heroHome: string;
  private  heroNav: string;


  constructor() {
    this.projectName = "TRAVELEX";
    this.heroHome =  "Home";
    this.heroNav =  "About";
  }
  ngOnInit() {
  }

}
