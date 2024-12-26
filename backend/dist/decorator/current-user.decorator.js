"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrentUser = void 0;
const common_1 = require("@nestjs/common");
const getCurrentUserByContext = (context) => {
    return context.switchToHttp().getRequest().user;
};
exports.CurrentUser = (0, common_1.createParamDecorator)((data, context) => getCurrentUserByContext(context));
//# sourceMappingURL=current-user.decorator.js.map