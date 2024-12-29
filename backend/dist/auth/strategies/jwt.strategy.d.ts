import { Strategy } from 'passport-jwt';
import { UserEntity } from "src/users/entities/user.entity";
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    constructor();
    validate(payload: UserEntity): UserEntity;
}
export {};
