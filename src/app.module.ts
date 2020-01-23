import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';
import { GqlConfigService } from './graphql.config.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRootAsync({
      useClass: GqlConfigService,
    }),
    ProductsModule
  ],
})
export class AppModule {}
