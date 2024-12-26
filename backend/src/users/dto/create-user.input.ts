import { InputType, Int, Field } from '@nestjs/graphql';
import { IsEmail,IsStrongPassword } from 'class-validator';

@InputType()
export class CreateUserInput {

  @Field(()=>String,{description:'Example field of email'})
  @IsEmail()
  email:string;

  @Field(()=>String,{description:'Example field of password'})
  @IsStrongPassword()
  password:string;
}
