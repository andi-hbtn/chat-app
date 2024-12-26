import { UserEntity } from 'src/users/entities/user.entity';
import { Response } from 'express';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    login(user: UserEntity, response: Response): Promise<void>;
}
