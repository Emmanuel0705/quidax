export declare class AppService {
    createAccount(): Promise<{
        uid: string;
        name: string;
        externalId: string;
        provider: string;
        organisationId: string;
        network: string;
        assets: {
            uid: string;
            type: string;
            address: string;
        }[];
    }>;
    getAddress(): Promise<{
        uid: string;
        accountId: string;
        address: string;
        type: string;
        balance: number;
    }>;
    createTransaction(): Promise<{
        status: string;
        data: {
            uid: string;
            hash: string;
            status: string;
            amount: number;
            asset: string;
            chain: string;
            fee: number;
            ref: string;
        };
    }>;
    getTransaction(): Promise<{
        uid: string;
        status: string;
        type: string;
        depositId: string;
        ref: string;
        transferId: any;
        address: string;
        hash: string;
        confirmation: number;
        note: string;
        amount: number;
        assetId: string;
        accountId: string;
        createdAt: string;
        completedAt: any;
        cancelledAt: any;
    }>;
    validateAddress(): Promise<{
        valid: boolean;
    }>;
    getTransactionCount(): Promise<number>;
}
