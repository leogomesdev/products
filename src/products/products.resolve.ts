import { Args, Mutation, Query, Resolver  } from '@nestjs/graphql';
import { GraphQLError } from 'graphql';

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

  @Mutation('updateProduct')
  updateProduct(@Args('id') id: number, @Args('name') name: string) {
    const selectedProductIndex = this.productsFromFakeDb.findIndex(product => product.id == id);
    if (selectedProductIndex == -1) {
      return new GraphQLError('Product not found');
    }
    this.productsFromFakeDb[selectedProductIndex].name = name;
    //this.productsFromFakeDb.splice(selectedProductIndex, 1);
    return this.productsFromFakeDb[selectedProductIndex];
  }

  @Mutation('deleteProduct')
  deleteProduct(@Args('id') id: number) {
    const selectedProductIndex = this.productsFromFakeDb.findIndex(product => product.id == id);
    if (selectedProductIndex == -1) {
      return new GraphQLError('Product not found');
    }
    this.productsFromFakeDb.splice(selectedProductIndex, 1);
    return 'OK';
  }
}