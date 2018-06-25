import {Routes} from "@angular/router";
import { FilterProductsComponent } from "../app/modules/catalog-module/filter-products/filter-products.component"
import { HomeComponent } from "./home/home.component";
import {ViewProductComponent} from "../app/modules/product-detail/view-product/view-product.component"


export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'search', component: HomeComponent} ,
    {path: 'home', component: HomeComponent},
    { path: 'project', component: FilterProductsComponent },
    { path: 'viewProject', component: ViewProductComponent },

   ];