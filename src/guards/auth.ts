import {
    BadRequestException,
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
} from "@nestjs/common";

@Injectable()
class AuthGuard implements CanActivate {
    constructor() {}
    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        request.user = await this.getAuth(request);
        return true;
    }

    async getAuth(req: any): Promise<any> {
        try {
            let token;
            console.log(req.headers, req.headers.authorization);
            if (req.headers.authorization) {
                token = req.headers.authorization;
            }

            if (!token) throw new BadRequestException("Unauthorized");

            return token;
        } catch (error) {
            console.log(error.message);
            if (error.response) {
                throw new UnauthorizedException(
                    error.response.data?.message || error.message
                );
            }
            throw new BadRequestException(error.message);
        }
    }
}

export default AuthGuard;
