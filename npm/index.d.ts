declare module '@apiverve/salestax' {
  export interface salestaxOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface salestaxResponse {
    status: string;
    error: string | null;
    data: SalesTaxLookupData;
    code?: number;
  }


  interface SalesTaxLookupData {
      state:   string;
      zip:     number;
      region:  string;
      rate:    number;
      county:  number;
      city:    number;
      special: number;
  }

  export default class salestaxWrapper {
    constructor(options: salestaxOptions);

    execute(callback: (error: any, data: salestaxResponse | null) => void): Promise<salestaxResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: salestaxResponse | null) => void): Promise<salestaxResponse>;
    execute(query?: Record<string, any>): Promise<salestaxResponse>;
  }
}
