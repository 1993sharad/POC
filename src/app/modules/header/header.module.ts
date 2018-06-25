import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppHeaderComponent } from './app-header/app-header.component'
import { RouterModule} from "@angular/router";
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';


@NgModule({
  imports: [
    HttpClientModule,
    CommonModule,
    RouterModule,
    MatCardModule
  ],
  declarations: [AppHeaderComponent, BreadcrumbComponent],

exports:[AppHeaderComponent,BreadcrumbComponent]

})
export class HeaderModule { }
