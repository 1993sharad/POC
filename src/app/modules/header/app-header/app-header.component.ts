import { Component, OnInit } from '@angular/core';
import { EventEmitter, Input } from '@angular/core';
import { AppHeaderService } from './app-header.service';
import { BreadcrumbComponent } from "../breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  constructor(private appHeaderService: AppHeaderService) { }
  @Input() headerData: any;
  @Input() styless: any;
  underLineData: any[] = [];
  pName: string = "";
  pDesc: string = "";
  ngOnInit() {
    // this.removeUnderLine();
    this.getHeaderDetail();
  }

  getHeaderDetail() {
    this.appHeaderService.getHeaderData()
      .subscribe(headerData => {
        if (headerData) {
          this.pName = headerData.hits.hits[0]._source.appTitleName;
          this.pDesc = headerData.hits.hits[0]._source.appTitleDesc;
        }

      },
      err => { })

  }
  removeUnderLine() {
    for (let i = 0; i < this.headerData.headerNavigation.length; i++) {
      if (i === 0)
        this.underLineData.push(true);

      this.underLineData.push(false);
    }
  }

  underLine(linkNumber: number, menuName: string): void {
    let breadcrumbObj = BreadcrumbComponent.getInstance();
    if (linkNumber !== 0) {
      breadcrumbObj.flushMenu();
      breadcrumbObj.addMenu({ name: menuName, url: '/project' });
    }
    else
      breadcrumbObj.flushMenu();
    // for (let i = 0; i < this.underLineData.length; i++) {
    //   if (linkNumber === i) {
    //     this.underLineData[i] = true;
    //     continue;
    //   }
    //   this.underLineData[i] = false;
    // }
  }
}
