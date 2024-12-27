import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UserModel } from './model/user.model';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/guards/gql-auth.guard';

@Resolver(() => UserModel)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => UserModel)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  @Query(() => [UserModel], { name: 'users' })
  @UseGuards(GqlAuthGuard)
  public findAll() {
    return this.usersService.findAll();
  }

  @Query(() => UserModel, { name: 'user' })
  public async findOne(@Args('id', { type: () => Int }) id: number):Promise<UserModel> {
    return await this.usersService.findOne(id);
  }

  @Mutation(() => UserModel)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput):Promise<UserModel> {
    return this.usersService.update(updateUserInput.id, updateUserInput);
  }

  @Mutation(() => UserModel)
  public async removeUser(@Args('id', { type: () => Int }) id: number) {
    const user = await this.usersService.findOne(id);
    if (!user) {
      throw new Error(`User with ID ${id} not found`);
    }
    this.usersService.remove(id);
    return user;
  }
}
