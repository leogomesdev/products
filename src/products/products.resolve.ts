import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductInput } from './dto/product-input';
import { ProductsService } from './products.service';
import { Product } from './models/product';

@Resolver()
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) { }

  @Query()
  products(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Query()
  product(@Args('id') id: number): Promise<Product> {
    return this.productsService.findOneById(id);
  }

  @Mutation()
  createProduct(@Args('data') data: ProductInput): Promise<Product> {
    return this.productsService.create(data);
  }

  @Mutation()
  updateProduct(@Args('id') id: number, @Args('data') data: ProductInput): Promise<Product>{
    return this.productsService.update(id, data);
  }

  @Mutation()
  deleteProduct(@Args('id') id: number): Promise<boolean> {
    return this.productsService.remove(id);
  }
}