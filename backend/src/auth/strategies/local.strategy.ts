import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { UsersService } from "src/users/users.service";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy){
    constructor(private readonly userService:UsersService){
        super({
            usernameField:"email"
        })
    }
    //Passport automatically creates a user object, based on the value we return from the validate() method,
    //and assigns it to the Request object as req.user
    public async validate(email:string,password:string){
        try{
            return await this.userService.verifyUser(email,password);
        }catch(error){
            throw new UnauthorizedException(error)
        }
    }
}