import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './users/entities/user.entity';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriverConfig, ApolloDriver } from '@nestjs/apollo';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { UsersResolver } from './users/users.resolver';


@Module({
  imports: [
      TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "Andi",
      password: "andi",
      database: "chat-app",
      entities: [UserEntity],
      synchronize: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
        driver: ApolloDriver,
        autoSchemaFile: "src/schema.gql"
    }), 
    UsersModule,
    AuthModule
  ],
  controllers: [],
  providers: [UsersResolver],
})
export class AppModule { }
