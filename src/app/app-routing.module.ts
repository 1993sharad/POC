import {Routes} from "@angular/router";
import { FilterProductsComponent } from "../app/modules/catalog-module/filter-products/filter-products.component"
import { HomeComponent } from "./home/home.component";


export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    // {path: '**', component: HomeComponent} ,
    {path: 'home', component: HomeComponent},
    { path: 'project', component: FilterProductsComponent }
   ];