import { Injectable } from '@nestjs/common';
import { UserEntity } from 'src/users/entities/user.entity';
import { Response } from 'express';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {

    constructor(private readonly jwtService:JwtService){}

    public async login(user:UserEntity,response:Response){
        const expires = new Date();
        expires.setSeconds(
            expires.getSeconds() + 3600
        );

        const tokenPayload = {id:user.id,email:user.email}
        const token = this.jwtService.sign(tokenPayload);
        response.cookie('Authentication',token,{httpOnly:true,expires:expires});
    }
}
