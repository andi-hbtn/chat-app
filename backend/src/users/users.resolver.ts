import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UserModel } from './model/user.model';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput, CurrentUserUpdate } from './dto/update-user.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from 'src/guards/gql-auth.guard';
import { CurrentUser } from 'src/decorator/current-user.decorator';

@Resolver(() => UserModel)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) { }

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
  @UseGuards(GqlAuthGuard)
  public async findOne(@Args('id', { type: () => Int }) id: number): Promise<UserModel> {
    return await this.usersService.findOne(id);
  }

  @Mutation(() => UserModel)
  @UseGuards(GqlAuthGuard)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput, @CurrentUser() user: CurrentUserUpdate): Promise<UserModel> {
    return this.usersService.update(user.id, updateUserInput);
  }

  @Mutation(() => UserModel)
  @UseGuards(GqlAuthGuard)
  public async removeUser(@CurrentUser user: CurrentUserUpdate) {
    const result = await this.usersService.findOne(user.id);
    if (!result) {
      throw new Error(`User with ID ${user.id} not found`);
    }
    this.usersService.remove(user.id);
    return user;
  }
}
