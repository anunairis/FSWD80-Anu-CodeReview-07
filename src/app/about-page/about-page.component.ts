import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {
  private projectName: string;
  constructor() { 
    this.projectName = "TRAVELEX";
  }

  ngOnInit() {
  }

}

