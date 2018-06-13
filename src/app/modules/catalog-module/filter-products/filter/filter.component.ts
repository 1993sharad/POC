import { FilterName } from './../filter-name.model';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FilterService } from './filter.service';
import { Output } from '@angular/core';
import { ProductsComponent } from '../products/products.component';
import { ViewChild, ElementRef } from '@angular/core'


@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit, OnChanges {

  constructor(public filterService: FilterService) { }

  @Input() filters: Filter[];
  @Input() filterValues: any[];
  @Input() productComponent: ProductsComponent;
  @Input() secondFilteName: any[];
  @ViewChild('search') searchName: ElementRef;

  secondLevelFilteName: any[] = [];
  selectedData: any[] = [];
  searchValue: string = "";

  ngOnInit() {
    //console.log(JSON.stringify(this.secondFilteName));
    this.getFilters();
    this.setUnchecked();
    this.selectedData.push({ name: "", value: [] });
  }
  values: any[] = [];
  sharad: any[] = [];
  setUnchecked() {
    let tempArray: any[] = [];
    let tempArray1: any[] = [];
    for (let i = 0; i < this.filterValues.length; i++) {
      this.filterValues[i].forEach(fName => {
        tempArray.push({ name: fName, isChecked: false, isHide: false });
      });
      this.values.push(tempArray);
      tempArray = [];
    }

  }

  onSearchChange(searchName) {
    //console.log(this.searchName.nativeElement.value);  this is one way
    console.log("MAT_SEARCH-Name  IS" + searchName);
    this.productComponent.sortProducts(this.selectedData, searchName);

  }

  matSearchClearValue(): void {
    this.searchValue = "";
    this.onSearchChange("");
  }

  setLevel2Unchecked() {
    //console.log("secondFilteName" + JSON.stringify(this.secondFilteName))
    let tempArray: any[] = [];
    let tempArray1: any[] = [];
    tempArray = []; tempArray1 = [];

    for (let i = 0; i < this.secondFilteName.length; i++) {
      this.secondFilteName[i].forEach(element => {
        element.forEach(element1 => {
          tempArray1.push({ name: element1, isChecked: false });
        });
        tempArray.push(tempArray1);
        tempArray1 = [];
      });
      this.secondLevelFilteName[i] = tempArray;
      tempArray = [];
    }
    console.log("secondLevelFilteName" + JSON.stringify(this.secondLevelFilteName))

  }

  clear(searchType: string, filterNo: number) {
    let i = 0;
    let tempArray: string[] = [];
    this.values[filterNo].forEach(element => {
      this.values[filterNo][i].isChecked = false;
      tempArray.push(this.values[filterNo][i++].name);
    });
    for (let i = 0; i < this.secondLevelFilteName.length; i++) {
      if (filterNo == i) {
        for (let j = 0; j < this.secondLevelFilteName[i].length; j++) {
          for (let k = 0; k < this.secondLevelFilteName[i][j].length; k++) {
            this.secondLevelFilteName[i][j][k].isChecked = false;
            tempArray.push(this.secondLevelFilteName[i][j][k].name);
            console.log(this.secondLevelFilteName[i][j][k].name)
          }
        }
      }
    }
    // tempArray.forEach(filterName => {
    this.setDataForSorting(searchType, "", filterNo, true);
    // });

  }

  clearAll(): void {
    let i = 0, j = 0;
    this.values.forEach(filter => {
      j = 0;
      filter.forEach(element => {
        this.values[i][j++].isChecked = false;
      });
      i++;
    });

    for (i = 0; i < this.secondLevelFilteName.length; i++) {
      for (j = 0; j < this.secondLevelFilteName[i].length; j++) {
        for (let k = 0; k < this.secondLevelFilteName[i][j].length; k++) {
          this.secondLevelFilteName[i][j][k].isChecked = false;
          // console.log(this.secondLevelFilteName[i][j][k].name)
        }
      }
    }
    this.selectedData = [{ name: "", value: [] }];
    this.searchValue = "";
    this.productComponent.sortProducts(this.selectedData, this.searchValue);
  }

  setFilterValue(filterName: string, j) {
    for (let i = 0; i < this.values[j].length; i++) {
      if (this.values[j][i].name === filterName) {
        this.values[j][i].isChecked = !this.values[j][i].isChecked;
        break;
      }
    }
  }

  filterName(searchType: string, filterName, i) {
    this.setDataForSorting(searchType, filterName, i, false);
    this.setFilterValue(filterName, i);
    this.productComponent.sortProducts(this.selectedData, this.searchValue);
  }

  filterNameSecondLevel(searchType: string, filterName: string, i: number, j: number) {
    this.setDataForSorting(searchType, filterName, i, false);
    for (let k = 0; k < this.secondLevelFilteName[i][j].length; k++) {
      if (this.secondLevelFilteName[i][j][k].name === filterName) {
        this.secondLevelFilteName[i][j][k].isChecked = !this.secondLevelFilteName[i][j][k].isChecked;
      }
    }
    this.productComponent.sortProducts(this.selectedData, this.searchValue);
  }



  setDataForSorting(searchType: string, filterName: string, filterNo: number, isClearClicked: boolean): void {
    let length: number = this.selectedData.length
    let isRemoved: boolean = false;
    if (filterNo >= length) {
      this.selectedData.push({ name: searchType, value: [] });
    }
    else {
      this.selectedData[filterNo].name = searchType;
    }

    if (isClearClicked) {
      // this.selectedData.splice(filterNo, 1);
      this.selectedData[filterNo].value = [];
      this.productComponent.sortProducts(this.selectedData, this.searchValue);
      return;
    }

    for (var i = 0; i < this.selectedData[filterNo].value.length; i++) {
      if (this.selectedData[filterNo].value[i] === filterName) {
        this.selectedData[filterNo].value.splice(i, 1);
        isRemoved = true;
        break;
      }
    }
    if (!isRemoved) {
      this.selectedData[filterNo].value.push(filterName)
    }
  }

  showFilterValue(filterName, j): void {
    for (let i = 0; i < this.values[j].length; i++) {
      if (this.values[j][i].name === filterName) {
        this.values[j][i].isHide = !this.values[j][i].isHide;
        break;
      }
    }
  }


  getFilters(): void {
    // console.log("hi sharad Filters data is " + JSON.stringify(this.filters));
    //console.log("hi sharad Filters value  data is " + JSON.stringify(this.filterValues));
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['filterValues'] && changes['filterValues'].currentValue) {
      this.filterValues = this.filterValues;
    }
    // console.log("hi sharadadadada" + this.filterValues); 
    if (changes['secondFilteName'] && changes['secondFilteName'].currentValue) {
      if (this.secondFilteName.length > 0)
        this.setLevel2Unchecked();
    }
  }
}

interface Filter {
  dataUrl: string;
  values: any[];
  filterName: string;
}

