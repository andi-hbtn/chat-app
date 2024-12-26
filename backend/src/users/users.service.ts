import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from "bcrypt";
import { UserEntity } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';


@Injectable()
export class UsersService {
  constructor(@InjectRepository(UserEntity) private readonly userRepository:Repository<UserEntity> ){}

  public async create(createUserInput: CreateUserInput) {
    return this.userRepository.save({
      ...createUserInput,
      password: await this.hashPassword(createUserInput.password)
    });
  }

  public async hashPassword(password:string){
    return await bcrypt.hash(password,10)
  }

  public async findAll():Promise<UserEntity[]> {
    try {
      return await this.userRepository.find();
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async findOne(id: number):Promise<UserEntity> {
    try {
      return await this.userRepository.findOne({where:{id}});
    } catch (error) {
      throw new Error(error.message);
    }
  }

 public async update(id: number, updateUserInput: UpdateUserInput):Promise<UserEntity> {
    try {
      if(updateUserInput.password){
        this.hashPassword(updateUserInput.password);
      }

       await this.userRepository.update(id,updateUserInput);
       return this.userRepository.findOne({where:{id}})
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async remove(id: number) {
    try {
      return await this.userRepository.delete(id);
   } catch (error) {
     throw new Error(error.message);
   }
  }

  public async verifyUser(email:string,password:string){
    const user = await this.userRepository.findOne({where:{email}});
    const passwordIsValid = await bcrypt.compare(password,user.password);

    if(!passwordIsValid){
      throw new UnauthorizedException('Credentials are not valid');
    }

    return user;
  }

}