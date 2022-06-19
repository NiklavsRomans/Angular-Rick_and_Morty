export interface Locations {
  info: LocationInfo;
  results: LocationResults[];
}

interface LocationInfo {
  count: number;
  pages: number;
  next: string;
  prev: null | string;
}

export interface LocationResults {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}
