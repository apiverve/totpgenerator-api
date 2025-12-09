declare module '@apiverve/totpgenerator' {
  export interface totpgeneratorOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface totpgeneratorResponse {
    status: string;
    error: string | null;
    data: TOTPGeneratorData;
    code?: number;
  }


  interface TOTPGeneratorData {
      token:         string;
      digits:        number;
      period:        number;
      timeRemaining: number;
      expiresAt:     Date;
  }

  export default class totpgeneratorWrapper {
    constructor(options: totpgeneratorOptions);

    execute(callback: (error: any, data: totpgeneratorResponse | null) => void): Promise<totpgeneratorResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: totpgeneratorResponse | null) => void): Promise<totpgeneratorResponse>;
    execute(query?: Record<string, any>): Promise<totpgeneratorResponse>;
  }
}
