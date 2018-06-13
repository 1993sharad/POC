import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { routes } from "./app-routing.module"
import { RouterModule} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { HeaderModule } from './modules/header/header.module'
import {CatalogModule } from '../app/modules/catalog-module/catalog.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent   
  ],
  
  imports: [CatalogModule,
    BrowserModule,
    HeaderModule,
    RouterModule.forRoot(routes, {useHash: false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
