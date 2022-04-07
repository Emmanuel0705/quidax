"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
let GlobalExceptionsFilter = class GlobalExceptionsFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const { statusCode, type, message, error, stack } = process.env.STAGE === 'production'
            ? this.handleErrorProd(exception, request)
            : this.handleErrorDev(exception);
        response.status(statusCode).json({
            statusCode,
            type,
            message,
            error,
            stack,
        });
    }
    handleErrorDev(exception) {
        exception =
            exception instanceof common_1.HttpException
                ? exception
                : new common_1.HttpException(exception, 400);
        const response = exception.getResponse();
        return {
            statusCode: exception.getStatus(),
            type: response.error,
            error: response.message,
            message: exception.message,
        };
    }
    handleErrorProd(exception, request) {
        if (!(exception instanceof common_1.HttpException)) {
            console.log('Error: ', exception.message);
            if (exception instanceof client_1.Prisma.PrismaClientKnownRequestError ||
                exception instanceof client_1.Prisma.PrismaClientValidationError) {
                const response = this.handlePrimsaErrors(exception, request);
                exception = new common_1.HttpException(response, response.status);
            }
            if (exception.name === 'TokenExpiredError' ||
                exception.name === 'JsonWebTokenError') {
                const response = this.handleJWTErrors(exception);
                exception = new common_1.HttpException(response, response.status);
            }
        }
        if (!(exception instanceof common_1.HttpException))
            exception = new common_1.HttpException('Internal Server Error', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        const response = exception.getResponse();
        return {
            statusCode: exception.getStatus(),
            type: response.error,
            error: response.message,
            message: exception.message,
        };
    }
    handlePrimsaErrors(e, req) {
        var _a, _b, _c, _d, _e;
        const response = {
            message: '',
            error: 'InvalidEntityException',
            status: common_1.HttpStatus.UNPROCESSABLE_ENTITY,
        };
        let code;
        if (!e.code && e.message.includes('Unknown field')) {
            code = 'UnknownField';
        }
        else if (!e.code && e.message.includes('Got invalid value')) {
            code = 'InvalidValue';
        }
        else if (!e.code) {
            code = 'Unknown';
        }
        else {
            code = e.code.toString();
        }
        switch (code) {
            case 'P2002':
                response.message = `Field \`${e.meta.target}\` already exist`;
                break;
            case 'P2022':
                response.message = `Column ${(_a = e === null || e === void 0 ? void 0 : e.meta) === null || _a === void 0 ? void 0 : _a.column} does not exist`;
                break;
            case 'P2025':
                response.message = `Record to ${req.method.toLowerCase()} does not exist`;
                break;
            case 'P2011':
                response.message = `Field ${(_b = e === null || e === void 0 ? void 0 : e.meta) === null || _b === void 0 ? void 0 : _b.constraint} cannot be null`;
                break;
            case 'UnknownField':
                response.error = code;
                response.message = (_c = e.message.split(`\n\n\n`)[1]) === null || _c === void 0 ? void 0 : _c.split('.')[0];
                break;
            case 'InvalidValue':
                response.error = code;
                response.message = (_d = e.message.split(`\n}\n\n`)[1]) === null || _d === void 0 ? void 0 : _d.split(`\n{\n`)[0];
                break;
            default:
                response.message = ((_e = e === null || e === void 0 ? void 0 : e.meta) === null || _e === void 0 ? void 0 : _e.cause) || e.message;
        }
        return response;
    }
    handleJWTErrors(e) {
        const response = {
            message: '',
            error: 'AuthenticationException',
            status: common_1.HttpStatus.UNAUTHORIZED,
        };
        switch (e.name) {
            case 'TokenExpiredError':
                response.message = 'Token expired. Please login again!';
                break;
            case 'JsonWebTokenError':
                response.message = 'Invalid token. Please login again!';
                break;
            default:
                response.message = 'Invalid token. Please login again!';
        }
        return response;
    }
};
GlobalExceptionsFilter = __decorate([
    (0, common_1.Catch)()
], GlobalExceptionsFilter);
exports.default = GlobalExceptionsFilter;
//# sourceMappingURL=exception.js.map