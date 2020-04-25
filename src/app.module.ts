import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { PostModule } from './post/post.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmOptions } from './config/typeorm.options';

@Module({
  imports: [
    PostModule,
    TypeOrmModule.forRoot(TypeOrmOptions),
    GraphQLModule.forRoot({
      playground: true,
      autoSchemaFile: true,
      installSubscriptionHandlers: true,
    }),
  ],
})
export class AppModule {}
