"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentUser = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const getCurrentUserByContext = (context) => {
    console.log('ExecutionContext Type:', context.getType());
    if (context.getType() === 'http') {
        return context.switchToHttp().getRequest().user;
    }
    if (context.getType() === 'graphql') {
        return graphql_1.GqlExecutionContext.create(context).getContext().req.user;
    }
};
exports.CurrentUser = (0, common_1.createParamDecorator)((data, context) => {
    return getCurrentUserByContext(context);
});
//# sourceMappingURL=current-user.decorator.js.map