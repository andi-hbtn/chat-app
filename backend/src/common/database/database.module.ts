import { Module } from "@nestjs/common";
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { UsersModule } from "src/users/users.module";
import { UsersResolver } from '../../users/users.resolver';
import { UserEntity } from "src/users/entities/user.entity";

@Module({
    imports: [
        ConfigModule.forRoot({isGlobal:true}),
        GraphQLModule.forRoot<ApolloDriverConfig>({
            driver:ApolloDriver,
            autoSchemaFile:"src/schema.gql"
        }),
        TypeOrmModule.forRoot({
            type: process.env.type as "mysql",
            host: process.env.host,
            port: parseInt(process.env.port),
            username: process.env.username,
            password: process.env.password,
            database: process.env.database,
            entities: [UserEntity],
            synchronize: true,
        }),
        UsersModule
    ],
    controllers:[],
    providers:[UsersResolver]
})



export class DatabaseModule{}

// console.log( typeof process.env.mysql_port)