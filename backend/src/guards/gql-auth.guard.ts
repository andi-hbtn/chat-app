import { AuthGuard } from "@nestjs/passport";
import { GqlExecutionContext } from "@nestjs/graphql";
import { ExecutionContext } from "@nestjs/common";

//JwtAuthGuard qe krijuam punon sh mire me rest endpoint
//por duhet ber funksionale me gql routes
export class GqlAuthGuard extends AuthGuard('jwt'){
    getRequest(context: ExecutionContext) {
       const ctx = GqlExecutionContext.create(context);
       return ctx.getContext().req;
    }
}