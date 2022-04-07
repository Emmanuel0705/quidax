import { ExceptionFilter, ArgumentsHost, HttpStatus } from '@nestjs/common';
import { Request } from 'express';
interface ClientErrorResponse {
    statusCode: number;
    message?: any;
    type: string;
    stack?: any;
    error?: any;
}
declare class GlobalExceptionsFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost): void;
    handleErrorDev(exception: any): ClientErrorResponse;
    handleErrorProd(exception: any, request: Request): ClientErrorResponse;
    handlePrimsaErrors(e: any, req: Request): {
        message: string;
        error: string;
        status: HttpStatus;
    };
    handleJWTErrors(e: any): {
        message: string;
        error: string;
        status: HttpStatus;
    };
}
export default GlobalExceptionsFilter;
