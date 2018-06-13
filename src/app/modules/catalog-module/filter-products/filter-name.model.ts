export interface FilterName {
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
    id: string;
    name: string;
    value: any[];
    image_url: string;
    order: number;
  }
  
  interface Shards {
    total: number;
    successful: number;
    failed: number;
  }