export interface Product {
    _index: string;
    _type: string;
    _id: string;
    _score: number;
    _source: Source;
  }
  
  interface Source {
    productDesc: string;
    category: string[];
    visibility?: any;
    imageUrl: string;
    productSummary: string;
    productUrl?: any;
    productTitle: string;
    attributes: Attributes;
    productVersion?: any;
    contactsList: any[];
    productId: string;
  }
  
  interface Attributes {
    applicationUrl: string;
  }