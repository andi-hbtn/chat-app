import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { LocalStrategy } from './strategies/local.strategy';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports:[
    UsersModule,
    JwtModule.register({
      global:true,
      secret:"secret",
      signOptions:{expiresIn:"1h"}
    })
  ],
  providers: [AuthService,LocalStrategy],
  controllers: [AuthController]
})
export class AuthModule {}