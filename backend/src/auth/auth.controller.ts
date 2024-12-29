import { Controller, Post, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { CurrentUser } from 'src/decorator/current-user.decorator';
import { LocalAuthGuard } from 'src/guards/local-auth.guard';
// import { AuthGuard } from "@nestjs/passport";
import { UserEntity } from 'src/users/entities/user.entity';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    //@UseGuards(AuthGuard('local'))
    //rekomandohet te perdoresh klase jo te kalosh emrin e strategjise ne AuthGuard
    @UseGuards(LocalAuthGuard)
    public async login(@CurrentUser() user: UserEntity, @Res({ passthrough: true }) response: Response) {
        //console.log("user---",user);
        return this.authService.login(user, response)
    }
}