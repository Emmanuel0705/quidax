export declare const encrypt: (pin: string) => Promise<string>;
export declare const verify: (pin: string, encrypted: string) => Promise<any>;
