export interface Product {
  took: number;
  timed_out: boolean;
  _shards: Shards;
  hits: Hits;
}

interface Hits {
  total: number;
  max_score: number;
  hits: Hit[];
}

interface Hit {
  _index: string;
  _type: string;
  _id: string;
  _score: number;
  _source: Source;
}

interface Source {
  image_url: string;
  Image: string;
  ProductDesc: string;
  ProductTitle: string;
  ProductUrl: string;
  ProductSummary: string;
  ProductId: string;
  ProductVersion: string;
}

interface Shards {
  total: number;
  successful: number;
  failed: number;
}