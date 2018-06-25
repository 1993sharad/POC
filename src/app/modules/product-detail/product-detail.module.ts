import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProductComponent } from './view-product/view-product.component';
import { RouterModule } from '@angular/router';
import {MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatCardModule,
        MatInputModule} from '@angular/material';
import { ReviewComponent } from './view-product/review/review.component';

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    RouterModule
  ],
  declarations: [ViewProductComponent, ReviewComponent]
})
export class ProductDetailModule { }
