import { AuthGuard } from "@nestjs/passport";

//LocalAuthGuard triggers the local strategy, which is implemented in LocalStrategy.
//The guard(LocalAuthGuard) does not directly interact with the strategy but relies on Passport's integration.
export class LocalAuthGuard extends AuthGuard('local') {
    constructor() {
        //console.log("LocalAuthGuard");
        super();
    }
}