import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'view-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  constructor() { }
  @Input("socialData") socialData: any;
  imageServar: string = "";
  imageUrl: string = "";
  temImage;

  ngOnInit() {
    this.imageUrl = this.imageServar + this.socialData.imageUrl;
    // for testing
    this.temImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8l5uTTOnebB3KcMlSOw-L7nY5KO2hFTTtU4pM8V7Kez1UC1Ha"
  }

}

