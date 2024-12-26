import { UsersService } from './users.service';
import { UserModel } from './model/user.model';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
export declare class UsersResolver {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(createUserInput: CreateUserInput): Promise<{
        password: string;
        email: string;
    } & import("./entities/user.entity").UserEntity>;
    findAll(): Promise<import("./entities/user.entity").UserEntity[]>;
    findOne(id: number): Promise<UserModel>;
    updateUser(updateUserInput: UpdateUserInput): Promise<UserModel>;
    removeUser(id: number): Promise<import("./entities/user.entity").UserEntity>;
}
