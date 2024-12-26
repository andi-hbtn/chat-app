"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const users_module_1 = require("../../users/users.module");
const users_resolver_1 = require("../../users/users.resolver");
const user_entity_1 = require("../../users/entities/user.entity");
let DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                autoSchemaFile: "src/schema.gql"
            }),
            typeorm_1.TypeOrmModule.forRoot({
                type: process.env.type,
                host: process.env.host,
                port: parseInt(process.env.port),
                username: process.env.username,
                password: process.env.password,
                database: process.env.database,
                entities: [user_entity_1.UserEntity],
                synchronize: true,
            }),
            users_module_1.UsersModule
        ],
        controllers: [],
        providers: [users_resolver_1.UsersResolver]
    })
], DatabaseModule);
//# sourceMappingURL=database.module.js.map