declare module '@apiverve/salestax' {
  export interface salestaxOptions {
    api_key: string;
    secure?: boolean;
  }

  /**
   * Describes fields the current plan does not unlock. Locked fields arrive as null
   * in `data`; `locked_fields` names them, using dot paths for nested fields.
   * Absent when the plan unlocks everything.
   */
  export interface PremiumInfo {
    message: string;
    upgrade_url: string;
    locked_fields: string[];
  }

  export interface salestaxResponse {
    status: string;
    error: string | null;
    data: SalesTaxLookupData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface SalesTaxLookupData {
      state:   null | string;
      zip:     number | null;
      region:  null | string;
      rate:    number | null;
      county:  number | null;
      city:    number | null;
      special: number | null;
  }

  export default class salestaxWrapper {
    constructor(options: salestaxOptions);

    execute(callback: (error: any, data: salestaxResponse | null) => void): Promise<salestaxResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: salestaxResponse | null) => void): Promise<salestaxResponse>;
    execute(query?: Record<string, any>): Promise<salestaxResponse>;
  }
}
