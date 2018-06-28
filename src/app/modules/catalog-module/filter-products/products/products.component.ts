import { FilterName } from './../filter-name.model';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Product } from '../product-name.model';
import { ProductService } from './product.service';
import { ModuleService } from "../../../module-service"
import { Router } from "@angular/router"
import { BreadcrumbComponent } from "../../../header/breadcrumb/breadcrumb.component";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnChanges {
  constructor(private productService: ProductService, private moduleService: ModuleService,
    private router: Router) { }

  @Input() products: Product;
  productArray: any[] = [];
  imageUrl: string = "https://fdk-author3-stage.cisco.com/c/dam/en/us/support/web/images/caas/";

  ngOnInit() {
  }

  updateProducts() {
    this.productArray = this.products.hits.hits;
    //console.log("products are"+JSON.stringify(this.productArray));
  }

  filterName: string;
  filtersName: string = "";

  public sortProducts(filterName: SearchProductType[], searchName) {
    this.filtersName = "";
    console.log(JSON.stringify(filterName));
    for (let i = 0; i < filterName.length; i++) {
      let x = false;
      if (filterName[i].value.length > 0) {
        let name: string = ""
        filterName[i].value.forEach((fName, index) => {
          name += "\"" + fName + "\"";
          if (filterName[i].value.length !== index + 1)
            name += ",";
        })
        this.filtersName += filterName[i].name + ":" + "(" + name + ")";
        name = "";
        x = true;
      }
      if (i + 1 < filterName.length) {
        if (x && filterName[i + 1].value.length > 0) {
          this.filtersName += " AND ";
          x = false;
        }
      }
    }
    if (this.filtersName.length > 0) {
      if (searchName !== "")
        this.filtersName += " AND " + searchName;
    }
    else
      this.filtersName += searchName;
    this.getProducts(this.filtersName);
  }

  getProducts(searchName): void {
    this.productService.getProducts(searchName)
      .subscribe(products => {
        this.productArray = products.hits.hits;
      },
      err => {
      })
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['products'] && changes['products'].currentValue) {
      //Do something once data is set.
      this.updateProducts();
    }
  }

  more(product: string, productNo: number): void {
    BreadcrumbComponent.getInstance().addMenu({ name: this.productArray[productNo]._source.productTitle, url: '/project' });
    this.moduleService.setProject(product);
    this.router.navigate(["viewProject"]);
  }

}

interface SearchProductType {
  name: string;
  value: string[];
}
