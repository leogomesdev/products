import { Module } from '@nestjs/common';
import { ProductsResolver } from './products.resolve';
import { ProductsService } from './products.service';
import { DateScalar } from 'src/common/scalar/date';

@Module({
  providers: [ProductsResolver, ProductsService, DateScalar],
})
export class ProductsModule {}
