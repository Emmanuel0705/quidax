import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Query,
    UseGuards,
} from "@nestjs/common";
import { AppService } from "@modules/app/service";
import {
    CreateAccountDto,
    CreateTransactionDto,
    GetAddressDto,
    GetTransactionDto,
    GetTransactionCountDto,
    ValidateAddressDto,
} from "./dto";
import { ApiBearerAuth } from "@nestjs/swagger";
import AuthGuard from "@guards/auth";

@Controller()
@ApiBearerAuth("API_KEY")
@UseGuards(AuthGuard)
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Post("account")
    createAccount(@Body() body: CreateAccountDto) {
        return this.appService.createAccount();
    }
    @Get("address")
    getAddress(@Query() query: GetAddressDto) {
        return this.appService.getAddress();
    }
    @Post("transaction")
    createTransaction(@Body() body: CreateTransactionDto) {
        return this.appService.createTransaction();
    }
    @Get("transaction")
    getTransaction(@Query() query: GetTransactionDto) {
        return this.appService.getTransactionCount();
    }
    @Get("transaction/count")
    getTransactionCount(@Query() query: GetTransactionCountDto) {
        return this.appService.getTransactionCount();
    }
    @Post("address/:address/validate")
    validateAddress(@Param() params: ValidateAddressDto) {
        return this.appService.getAddress();
    }
}
