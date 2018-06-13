import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  headerDetail: any;
  styleData: any;

  constructor() {
    this.headerDetail = {
      aboutHeader: "Software Platform for Accelerated Development and Evolution",
      headerHeading: "SPADE Portal Home",
      headerNavigation: [{ name: "Home", url: "/home" },
      { name: "Product Catalog", url: "/project" },
      { name: "Training", url: "" },
      { name: "Search", url: "" },
      ]
    };

    this.styleData = {
      'tab': {
        'color': 'grey',
        'font-style': ''
      },
      'title': { '': '' },
      'aboutHeader': { 'color': '' },
      'height': { 'height': '12vh' }
    }

  }
}
