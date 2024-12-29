"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const users_service_1 = require("./users.service");
const user_model_1 = require("./model/user.model");
const create_user_input_1 = require("./dto/create-user.input");
const update_user_input_1 = require("./dto/update-user.input");
const common_1 = require("@nestjs/common");
const gql_auth_guard_1 = require("../guards/gql-auth.guard");
const current_user_decorator_1 = require("../decorator/current-user.decorator");
let UsersResolver = class UsersResolver {
    constructor(usersService) {
        this.usersService = usersService;
    }
    createUser(createUserInput) {
        return this.usersService.create(createUserInput);
    }
    findAll() {
        return this.usersService.findAll();
    }
    async findOne(id) {
        return await this.usersService.findOne(id);
    }
    updateUser(updateUserInput, user) {
        return this.usersService.update(user.id, updateUserInput);
    }
    async removeUser(user) {
        const result = await this.usersService.findOne(user.id);
        if (!result) {
            throw new Error(`User with ID ${user.id} not found`);
        }
        this.usersService.remove(user.id);
        return user;
    }
};
exports.UsersResolver = UsersResolver;
__decorate([
    (0, graphql_1.Mutation)(() => user_model_1.UserModel),
    __param(0, (0, graphql_1.Args)('createUserInput')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_user_input_1.CreateUserInput]),
    __metadata("design:returntype", void 0)
], UsersResolver.prototype, "createUser", null);
__decorate([
    (0, graphql_1.Query)(() => [user_model_1.UserModel], { name: 'users' }),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersResolver.prototype, "findAll", null);
__decorate([
    (0, graphql_1.Query)(() => user_model_1.UserModel, { name: 'user' }),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    __param(0, (0, graphql_1.Args)('id', { type: () => graphql_1.Int })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "findOne", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_model_1.UserModel),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    __param(0, (0, graphql_1.Args)('updateUserInput')),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_user_input_1.UpdateUserInput, update_user_input_1.CurrentUserUpdate]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "updateUser", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_model_1.UserModel),
    (0, common_1.UseGuards)(gql_auth_guard_1.GqlAuthGuard),
    __param(0, current_user_decorator_1.CurrentUser),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_user_input_1.CurrentUserUpdate]),
    __metadata("design:returntype", Promise)
], UsersResolver.prototype, "removeUser", null);
exports.UsersResolver = UsersResolver = __decorate([
    (0, graphql_1.Resolver)(() => user_model_1.UserModel),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersResolver);
//# sourceMappingURL=users.resolver.js.map