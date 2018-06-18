import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilterProductsComponent } from '../catalog-module/filter-products/filter-products.component';
import {FilterComponent } from '../catalog-module/filter-products/filter/filter.component';
import {ProductsComponent } from '../catalog-module/filter-products/products/products.component';
import { MatCardModule } from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule,MatButtonModule,MatMenuModule} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    MatMenuModule,
    FormsModule,
    CommonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  declarations: [
    FilterProductsComponent,
    FilterComponent,
    ProductsComponent,]
})
export class CatalogModule { }
