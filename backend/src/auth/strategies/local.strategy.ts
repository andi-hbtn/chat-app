import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { UsersService } from "src/users/users.service";

//@Injectable() ben te mundur qe kjo klase te injektohet ne Controller ,Services
//ben te mundur edhe UserService te te injektohet ne klasen LocalStrategy nepermjet constructor 
@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly userService: UsersService) {
        console.log("LocalStrategy");
        super({
            usernameField: "email"
        })
    }

    //If the validate method returns a valid user, the user object is attached to req.user.
    //Passport automatically creates a user object, based on the value we return from the validate() method,
    //and assigns it to the Request object as req.user
    public async validate(email: string, password: string) {
        try {
            // console.log("email---", await this.userService.verifyUser(email, password))
            // const user = {email:"email",pass:"pass"};
            // return user;
            // console.log(await this.userService.verifyUser(email, password))
            return await this.userService.verifyUser(email, password);
        } catch (error) {
            throw new UnauthorizedException(error)
        }
    }
}