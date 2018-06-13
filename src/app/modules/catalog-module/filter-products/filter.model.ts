export interface Filters {
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
    appTitleName: string;
    appTitleDesc: string;
    appBaseName: string;
    id: string;
    filters: Filter[];
  }
  
  interface Filter {
    dataUrl: string;
    values: any[];
    filterName: string;
  }
  
  interface Shards {
    total: number;
    successful: number;
    failed: number;
  }