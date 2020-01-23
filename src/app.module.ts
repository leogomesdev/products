import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';
import { GqlConfigService } from './graphql.config.service';
import { DateScalar } from './common/scalar/date';

@Module({
  imports: [
    ConfigModule.forRoot(),
    GraphQLModule.forRootAsync({
      useClass: GqlConfigService,
    }),
    ProductsModule
  ],
  providers: [DateScalar],
})
export class AppModule {}
