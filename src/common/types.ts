export type API_CALL_STATUS = 'INIT' | 'LOADING' | 'SUCCESS' | 'ERROR';
export interface Resident {
  url: string;
}

export interface Planet {
  name: string;
  url: string;
  residents: Resident[];
}

export interface FetchPlanetsResponse {
  count: number;
  next: null | string;
  previous: null | string;
  results: Planet[];
}
