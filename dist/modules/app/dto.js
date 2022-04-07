"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateAddressDto = exports.GetTransactionCountDto = exports.GetTransactionDto = exports.GetAddressDto = exports.CreateTransactionDto = exports.CreateAccountDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateAccountDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: "test-account" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateAccountDto.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "user-pass-phrase" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateAccountDto.prototype, "passphrase", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: ["ETH"] }),
    (0, class_validator_1.IsArray)(),
    __metadata("design:type", Array)
], CreateAccountDto.prototype, "assets", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "uid-iss-lloo-uui-oou-ee-ii" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateAccountDto.prototype, "externalId", void 0);
exports.CreateAccountDto = CreateAccountDto;
class GetAddressDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ example: "0x55f63F972F6D7c7cC60ACa994dA9079d3aE4d6c4" }),
    __metadata("design:type", String)
], GetAddressDto.prototype, "address", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "ETH" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetAddressDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "1234534" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], GetAddressDto.prototype, "tag", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "uid-iss-lloo-uui-oou-ee-ii" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], GetAddressDto.prototype, "uid", void 0);
exports.GetAddressDto = GetAddressDto;
class CreateTransactionDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: "uid-iss-lloo-uui-oou-ee-ii" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTransactionDto.prototype, "accountId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "ETH" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTransactionDto.prototype, "asset", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "0x55f63F972F6D7c7cC60ACa994dA9079d3aE4d6c4" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateTransactionDto.prototype, "to", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 2 }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], CreateTransactionDto.prototype, "amount", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "ETHEREUM" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateTransactionDto.prototype, "chain", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 0.001 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateTransactionDto.prototype, "gasLimit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: 0.001 }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateTransactionDto.prototype, "gasPrice", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ example: "chop life - from morris to tom" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateTransactionDto.prototype, "note", void 0);
exports.CreateTransactionDto = CreateTransactionDto;
class GetTransactionDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: "ae866891-9629-4bbf-85c0-9753ebbf57c9" }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], GetTransactionDto.prototype, "txId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "0x55f63F972F6D7c7cC60ACa994dA9079d3aE4d6c44d7979dd11dbc25d9345bd88889ad8297",
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], GetTransactionDto.prototype, "hash", void 0);
exports.GetTransactionDto = GetTransactionDto;
class ValidateAddressDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: "0x55f63F972F6D7c7cC60ACa994dA9079d3aE4d6c4" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], ValidateAddressDto.prototype, "address", void 0);
exports.ValidateAddressDto = ValidateAddressDto;
class GetTransactionCountDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ example: "ae866891-9629-4bbf-85c0-9753ebbf57c9" }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetTransactionCountDto.prototype, "txId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        example: "0x55f63F972F6D7c7cC60ACa994dA9079d3aE4d6c44d7979dd11dbc25d9345bd88889ad8297",
    }),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], GetTransactionCountDto.prototype, "hash", void 0);
exports.GetTransactionCountDto = GetTransactionCountDto;
//# sourceMappingURL=dto.js.map