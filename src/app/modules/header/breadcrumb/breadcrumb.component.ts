import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit {

  @Input("menu") menu: MenuData[];
  @Input("leftSideFixedMenu") fixedMenu: MenuData;
  hideBreadcrumb: boolean = false;
  breadcrumb: MenuData[]
  static obj: BreadcrumbComponent = null;

  constructor(private router: Router) {
    if (BreadcrumbComponent.obj === null) {
      BreadcrumbComponent.obj = this;
    }
  }

  navigateTo(menuNo: number): void {
    //     if(menuNo === 0)
    // this.hideBreadcrumb = true;
    this.breadcrumb.splice(menuNo + 1);
  }


  ngOnInit() {
    this.breadcrumbData();
  }
  static getInstance(): BreadcrumbComponent {
    return this.obj;
  }
  // currentUrl: string= ""
  breadcrumbData(): void {
    this.breadcrumb = this.menu;
    // this.router.events.subscribe((res) => {
    //   // console.log(this.router.url.length);
    //   if (this.currentUrl !== this.router.url) {
    //     this.currentUrl = this.router.url;
    //     // this.currentUrl = this.currentUrl.substr(1);
    //     console.log("current route is :" + this.currentUrl);  
    //   }
    // });
  }

  addMenu(menu: MenuData) {
    for (let i = 0; i < this.breadcrumb.length; i++) {
      if (menu.name === this.breadcrumb[i].name) {

      }
    }

    this.breadcrumb.push(menu);
  }

  removeMenu(): void {
    this.breadcrumb.pop();
  }
  flushMenu(): void {
    this.breadcrumb = [];
  }
}
interface MenuData {
  name: string;
  url: string;
}
