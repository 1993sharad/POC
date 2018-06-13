import { async } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { FilterProductService } from './filter-products.service';
import { Filters } from './filter.model';
import { FilterName } from './filter-name.model';
import { Product } from './product-name.model';

@Component({
  selector: 'app-filter-products',
  templateUrl: './filter-products.component.html',
  styleUrls: ['./filter-products.component.css']
})
export class FilterProductsComponent implements OnInit {

  constructor(public filterProductService: FilterProductService) {
  }

  filterData: Filters;
  filters: Filter[];
  filterValue: any[] = [];
  allFiltersValue: any[] = [];
  // filters1:   Array<Filter> ; 
  filterCount: number = 0;
  isAPICalled: boolean = false;
  filters1 = new Array<Filter>();
  filterNames: FilterName;
  secondFilteName: any[] = [];
  products: Product;
  hideComponent: boolean = true;

  ngOnInit() {
    this.getProducts();
    this.getFilter();
  }

  getProducts(): void {
    this.filterProductService.getProducts()
      .subscribe(data => {
        if (data) {
          this.products = <Product>data;
          this.hideComponent = false;
        }
      },
      err => {
      })
  }

  getFilter(): void {
    this.filterProductService.getFilters()
      .subscribe(
      data => {
        if (data) {
          this.filterData = <Filters>data;
          this.filters = this.filterData.hits.hits[0]._source.filters;
          this.filterData.hits.hits[0]._source.filters.forEach(obj => {
            this.filters1.push(obj);
          })
          this.removeFilterWithoutURL();
          this.getFilterName();
        }
      },
      err => { alert("no url for api") }
      )
  }

  removeFilterWithoutURL(): void {
    for (let i = 0; i < this.filters.length; i++) {
      if (this.filters[i].dataUrl === "" || this.filters[i].dataUrl === undefined) {
        this.filters.splice(i, 1);
        --i;
      }
    }
  }

  getFilterName(): void {

    let secondFilter: any[] = [];

    let url = this.filters1[this.filterCount++].dataUrl;
    this.filterProductService.getFilterValues(url)
      .subscribe(data => {
        if (data) {
          this.filterNames = <FilterName>data;
          for (let j = 0; j < this.filterNames.hits.hits.length; j++) {
            this.filterNames.hits.hits[j]._source.name
            this.filterValue.push(this.filterNames.hits.hits[j]._source.name);
            secondFilter.push(this.filterNames.hits.hits[j]._source.value);
          }
          this.allFiltersValue.push(this.filterValue);
          this.secondFilteName.push(secondFilter);
          secondFilter = [];
          this.filterValue = [];
          if (this.filters1.length === this.filterCount) {
            this.isAPICalled = true;
            return;
          }
          this.getFilterName();
        }
        else {
          this.secondFilteName.push([]);
          this.allFiltersValue.push([]);
          if (this.filters1.length === this.filterCount) {
            this.isAPICalled = true;
            return;
          }
          this.getFilterName();
        }
      })
  }
}
export interface Filter {
  dataUrl: string;
  values: any[];
  filterName: string;
}

