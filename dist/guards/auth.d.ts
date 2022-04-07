import { CanActivate, ExecutionContext } from "@nestjs/common";
declare class AuthGuard implements CanActivate {
    constructor();
    canActivate(context: ExecutionContext): Promise<boolean>;
    getAuth(req: any): Promise<any>;
}
export default AuthGuard;
