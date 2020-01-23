import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class ProductsResolver {
  productsFromFakeDb = [
    { id: 0, name: 'Dipiron' },
    { id: 1, name: 'Neosaldin' }
  ];

  @Query('products')
  getProducts() {
    return this.productsFromFakeDb;
  }

  @Mutation('createProduct')
  createProduct(@Args('name') name: string) {
    const id = this.productsFromFakeDb.length;
    const newProduct = {id, name};
    this.productsFromFakeDb.push(newProduct);
    return newProduct;
  }
}