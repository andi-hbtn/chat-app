import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from 'passport-jwt';
import { Request } from "express";
import { UserEntity } from "src/users/entities/user.entity";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromExtractors([
                (request: Request) => {
                    return request.cookies.Authentication
                }
            ]),
            ignoreExpiration: false,
            secretOrKey: "secret"
        })
    }

    //ajo qe kthen metoda validate do e bej attach ne obj e Request
    //dhe tani cdo route do te kete aksess tek user obj qe merret nga req Request
    //dhe nuk do shkoj ne db qe te bej query
    validate(payload: UserEntity) {
        return payload;
    }

}