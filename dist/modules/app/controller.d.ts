import { AppService } from "@modules/app/service";
import { CreateAccountDto, CreateTransactionDto, GetAddressDto, GetTransactionDto, GetTransactionCountDto, ValidateAddressDto } from "./dto";
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    createAccount(body: CreateAccountDto): Promise<{
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
    getAddress(query: GetAddressDto): Promise<{
        uid: string;
        accountId: string;
        address: string;
        type: string;
        balance: number;
    }>;
    createTransaction(body: CreateTransactionDto): Promise<{
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
    getTransaction(query: GetTransactionDto): Promise<number>;
    getTransactionCount(query: GetTransactionCountDto): Promise<number>;
    validateAddress(params: ValidateAddressDto): Promise<{
        uid: string;
        accountId: string;
        address: string;
        type: string;
        balance: number;
    }>;
}
