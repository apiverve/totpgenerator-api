declare module '@apiverve/totpgenerator' {
  export interface totpgeneratorOptions {
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

  export interface totpgeneratorResponse {
    status: string;
    error: string | null;
    data: TOTPGeneratorData;
    code?: number;
    premium?: PremiumInfo;
  }


  interface TOTPGeneratorData {
      token:         null | string;
      digits:        number | null;
      period:        number | null;
      timeRemaining: number | null;
      expiresAt:     Date | null;
  }

  export default class totpgeneratorWrapper {
    constructor(options: totpgeneratorOptions);

    execute(callback: (error: any, data: totpgeneratorResponse | null) => void): Promise<totpgeneratorResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: totpgeneratorResponse | null) => void): Promise<totpgeneratorResponse>;
    execute(query?: Record<string, any>): Promise<totpgeneratorResponse>;
  }
}
