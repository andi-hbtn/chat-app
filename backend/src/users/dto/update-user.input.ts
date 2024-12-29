import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
//PartialType na jep mundesine qe te trashegojme nga klasa CreateUserInput 
// props & docorators qe jan perdorur ne CreateUserInput class
export class UpdateUserInput extends PartialType(CreateUserInput) {

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => String, { nullable: true })
  password?: string;
}

@InputType()
export class CurrentUserUpdate extends PartialType(CreateUserInput) {

  @Field(() => String, { nullable: true })
  id: number;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => String, { nullable: true })
  password?: string;
}