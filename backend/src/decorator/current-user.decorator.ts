import { createParamDecorator, ExecutionContext } from "@nestjs/common";
import { UserEntity } from "src/users/entities/user.entity";

const getCurrentUserByContext = (context:ExecutionContext):UserEntity=>{
    return context.switchToHttp().getRequest().user;
}

export const CurrentUser = createParamDecorator(
    (data:unknown,context:ExecutionContext) => getCurrentUserByContext(context)
)