import { Component, OnInit } from '@angular/core';
import { ModuleService } from "../../module-service";
import { Product } from "./product-model";
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  constructor(private moduleService: ModuleService, private sanitizer: DomSanitizer) { }

  product: Product;
  socialData: SocialModel;
  ImageUrl: string = "http://wwwin.cisco.com/dir/photo/std/";
  directoryUrl: string = "http://wwwin-tools.cisco.com/dir/details/";

  ngOnInit() {
    console.log(JSON.stringify(this.moduleService.getProject()));
    this.product = this.moduleService.getProject();
    this.fetchSocialData();
  }
  sanitize(url: string) {
    return this.sanitizer.bypassSecurityTrustUrl(url);
  }
  capitalizeFirstLetter(authorName: string): string {
    return authorName.charAt(0).toUpperCase() + authorName.slice(1);
  }

  fetchSocialData() {
    this.socialData = {
      "imageUrl": this.product._source.imageUrl,
    }
  }

  htmlDecode(htmlString): string {
    var ret = htmlString.replace(/>/g, '>');
    ret = ret.replace(/</g, '<');
    ret = ret.replace(/"/g, '"');
    ret = ret.replace(/&apos;/g, "'");
    ret = ret.replace(/&/g, '&');
    console.log("sahana daily nahana");
    return ret;

  }

}
interface SocialModel {
  imageUrl: string;
}
