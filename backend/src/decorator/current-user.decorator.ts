import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { GqlContextType, GqlExecutionContext } from "@nestjs/graphql";
import { UserEntity } from "src/users/entities/user.entity";

const getCurrentUserByContext = (context:ExecutionContext):UserEntity=>{
    console.log('ExecutionContext Type:', context.getType());
    if(context.getType() === 'http'){
        return context.switchToHttp().getRequest().user;
    } else if(context.getType<GqlContextType>() === 'graphql'){
        //console.log("gql-----")
        return GqlExecutionContext.create(context).getContext().req.user;
    }
}

export const CurrentUser = createParamDecorator(
    (data:unknown,context:ExecutionContext) => {
        return getCurrentUserByContext(context)
    }
)