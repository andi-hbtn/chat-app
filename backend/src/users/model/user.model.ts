import { ObjectType, Field, Int} from '@nestjs/graphql';

@ObjectType()
export class UserModel {
  @Field(() => Int, { description: 'User id' })
  id: number;

  @Field(()=>String,{description:"User email"})
  email:string

  @Field(()=> String,{description:"User password"})
  password:string
}
