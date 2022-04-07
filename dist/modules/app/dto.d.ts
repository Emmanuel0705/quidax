declare class CreateAccountDto {
    name: string;
    passphrase: string;
    assets: string[];
    externalId: string;
}
declare class GetAddressDto {
    address: string;
    type: string;
    tag: string;
    uid: string;
}
declare class CreateTransactionDto {
    accountId: string;
    asset: string;
    to: string;
    amount: number;
    chain: string;
    gasLimit: number;
    gasPrice: number;
    note: string;
}
declare class GetTransactionDto {
    txId: string;
    hash: string;
}
declare class ValidateAddressDto {
    address: string;
}
declare class GetTransactionCountDto {
    txId: string;
    hash: string;
}
export { CreateAccountDto, CreateTransactionDto, GetAddressDto, GetTransactionDto, GetTransactionCountDto, ValidateAddressDto, };
