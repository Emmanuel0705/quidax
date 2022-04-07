import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsNumber, IsOptional, IsString } from "class-validator";

//
class CreateAccountDto {
    @ApiProperty({ example: "test-account" })
    @IsString()
    name: string;

    @ApiProperty({ example: "user-pass-phrase" })
    @IsString()
    @IsOptional()
    passphrase: string;

    @ApiProperty({ example: ["ETH"] })
    @IsArray()
    assets: string[];

    @ApiProperty({ example: "uid-iss-lloo-uui-oou-ee-ii" })
    @IsString()
    @IsOptional()
    externalId: string;
}

class GetAddressDto {
    @IsString()
    @IsOptional()
    @ApiProperty({ example: "0x55f63F972F6D7c7cC60ACa994dA9079d3aE4d6c4" })
    address: string;

    @ApiProperty({ example: "ETH" })
    @IsString()
    type: string;

    @ApiProperty({ example: "1234534" })
    @IsString()
    @IsOptional()
    tag: string;

    @ApiProperty({ example: "uid-iss-lloo-uui-oou-ee-ii" })
    @IsString()
    @IsOptional()
    uid: string;
}
class CreateTransactionDto {
    @ApiProperty({ example: "uid-iss-lloo-uui-oou-ee-ii" })
    @IsString()
    accountId: string;

    @ApiProperty({ example: "ETH" })
    @IsString()
    asset: string;

    @ApiProperty({ example: "0x55f63F972F6D7c7cC60ACa994dA9079d3aE4d6c4" })
    @IsString()
    to: string;

    @ApiProperty({ example: 2 })
    @IsNumber()
    amount: number;

    @ApiProperty({ example: "ETHEREUM" })
    @IsString()
    @IsOptional()
    chain: string;

    @ApiProperty({ example: 0.001 })
    @IsNumber()
    @IsOptional()
    gasLimit: number;

    @ApiProperty({ example: 0.001 })
    @IsNumber()
    @IsOptional()
    gasPrice: number;

    @ApiProperty({ example: "chop life - from morris to tom" })
    @IsString()
    @IsOptional()
    note: string;
}

class GetTransactionDto {
    @ApiProperty({ example: "ae866891-9629-4bbf-85c0-9753ebbf57c9" })
    @IsString()
    @IsOptional()
    txId: string;

    @ApiProperty({
        example:
            "0x55f63F972F6D7c7cC60ACa994dA9079d3aE4d6c44d7979dd11dbc25d9345bd88889ad8297",
    })
    @IsString()
    @IsOptional()
    hash: string;
}

class ValidateAddressDto {
    @ApiProperty({ example: "0x55f63F972F6D7c7cC60ACa994dA9079d3aE4d6c4" })
    @IsString()
    address: string;
}
class GetTransactionCountDto {
    @ApiProperty({ example: "ae866891-9629-4bbf-85c0-9753ebbf57c9" })
    @IsString()
    txId: string;

    @ApiProperty({
        example:
            "0x55f63F972F6D7c7cC60ACa994dA9079d3aE4d6c44d7979dd11dbc25d9345bd88889ad8297",
    })
    @IsString()
    hash: string;
}

export {
    CreateAccountDto,
    CreateTransactionDto,
    GetAddressDto,
    GetTransactionDto,
    GetTransactionCountDto,
    ValidateAddressDto,
};
