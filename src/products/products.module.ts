import { Module } from '@nestjs/common';
import { ProductsResolver } from './products.resolve';

@Module({
  providers: [ProductsResolver],
})
export class ProductsModule {}
