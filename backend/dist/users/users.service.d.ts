import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
export declare class UsersService {
    private readonly userRepository;
    constructor(userRepository: Repository<UserEntity>);
    create(createUserInput: CreateUserInput): Promise<{
        password: string;
        email: string;
    } & UserEntity>;
    hashPassword(password: string): Promise<string>;
    findAll(): Promise<UserEntity[]>;
    findOne(id: number): Promise<UserEntity>;
    update(id: number, updateUserInput: UpdateUserInput): Promise<UserEntity>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    verifyUser(email: string, password: string): Promise<UserEntity>;
}
