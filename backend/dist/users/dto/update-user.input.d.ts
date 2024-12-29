import { CreateUserInput } from './create-user.input';
declare const UpdateUserInput_base: import("@nestjs/common").Type<Partial<CreateUserInput>>;
export declare class UpdateUserInput extends UpdateUserInput_base {
    email?: string;
    password?: string;
}
declare const CurrentUserUpdate_base: import("@nestjs/common").Type<Partial<CreateUserInput>>;
export declare class CurrentUserUpdate extends CurrentUserUpdate_base {
    id: number;
    email?: string;
    password?: string;
}
export {};
