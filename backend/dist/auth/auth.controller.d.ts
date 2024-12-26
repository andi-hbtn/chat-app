import { Response } from 'express';
import { UserEntity } from 'src/users/entities/user.entity';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(user: UserEntity, response: Response): Promise<void>;
}
