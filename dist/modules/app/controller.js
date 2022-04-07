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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const service_1 = require("./service");
const dto_1 = require("./dto");
const swagger_1 = require("@nestjs/swagger");
const auth_1 = require("../../guards/auth");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    createAccount(body) {
        return this.appService.createAccount();
    }
    getAddress(query) {
        return this.appService.getAddress();
    }
    createTransaction(body) {
        return this.appService.createTransaction();
    }
    getTransaction(query) {
        return this.appService.getTransactionCount();
    }
    getTransactionCount(query) {
        return this.appService.getTransactionCount();
    }
    validateAddress(params) {
        return this.appService.getAddress();
    }
};
__decorate([
    (0, common_1.Post)("account"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateAccountDto]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "createAccount", null);
__decorate([
    (0, common_1.Get)("address"),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.GetAddressDto]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getAddress", null);
__decorate([
    (0, common_1.Post)("transaction"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.CreateTransactionDto]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "createTransaction", null);
__decorate([
    (0, common_1.Get)("transaction"),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.GetTransactionDto]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getTransaction", null);
__decorate([
    (0, common_1.Get)("transaction/count"),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.GetTransactionCountDto]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getTransactionCount", null);
__decorate([
    (0, common_1.Post)("address/:address/validate"),
    __param(0, (0, common_1.Param)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.ValidateAddressDto]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "validateAddress", null);
AppController = __decorate([
    (0, common_1.Controller)(),
    (0, swagger_1.ApiBearerAuth)("API_KEY"),
    (0, common_1.UseGuards)(auth_1.default),
    __metadata("design:paramtypes", [service_1.AppService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=controller.js.map