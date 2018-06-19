import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewProductComponent } from './view-product/view-product.component';
import {MatIconModule,
        MatButtonModule,
        MatMenuModule,
        MatCardModule,
        MatInputModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
  ],
  declarations: [ViewProductComponent]
})
export class ProductDetailModule { }
