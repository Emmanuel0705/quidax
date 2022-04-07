"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    async createAccount() {
        return {
            uid: "some-internal-uuid",
            name: "test-account",
            externalId: "some-interal-uuid",
            provider: "fireblocks",
            organisationId: "quidax-uuid",
            network: "TESTNET",
            assets: [
                {
                    uid: "some-uuid",
                    type: "ETH",
                    address: "0x55f63F972F6D7c7cC60ACa994dA9079d3aE4d6c4",
                },
            ],
        };
    }
    async getAddress() {
        return {
            uid: "some-address-uuid",
            accountId: "some-uuid",
            address: "0x55f63F972F6D7c7cC60ACa994dA9079d3aE4d6c4",
            type: "ETH",
            balance: 8.0,
        };
    }
    async createTransaction() {
        return {
            status: "success",
            data: {
                uid: "some-uuid",
                hash: "some-transaction-hash",
                status: "PENDING",
                amount: 2,
                asset: "ETH",
                chain: "ETHEREUM",
                fee: 0.0002,
                ref: "QUI-asudfpadsfadsfa",
            },
        };
    }
    async getTransaction() {
        return {
            uid: "ae866891-9629-4bbf-85c0-9753ebbf57c9",
            status: "PENDING",
            type: "DEPOSIT",
            depositId: "a445054b-c3ea-42d2-8127-42c417b84c4a",
            ref: "TRX-E8qVYTYAZm$16qaBcFL4qjgD7k9Su#",
            transferId: null,
            address: "0x55f63F972F6D7c7cC60ACa994dA9079d3aE4d6c4",
            hash: "0x55f63F972F6D7c7cC60ACa994dA9079d3aE4d6c44d7979dd11dbc25d9345bd88889ad8297",
            confirmation: 0,
            note: "flex on me - morris to tom",
            amount: 2,
            assetId: "7bc33e73-5fd8-4647-aaef-75ca793cc35d",
            accountId: "326b47a1-da25-45e9-af9f-ae3e440ea7f4",
            createdAt: "2021-06-23T21:17:08.761Z",
            completedAt: null,
            cancelledAt: null,
        };
    }
    async validateAddress() {
        return { valid: true };
    }
    async getTransactionCount() {
        return Math.round(Math.random());
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=service.js.map