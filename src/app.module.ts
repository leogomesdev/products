import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      resolverValidationOptions: {
        requireResolversForResolveType: false,
      }
    }),
    ProductsModule
  ],
})
export class AppModule {}
