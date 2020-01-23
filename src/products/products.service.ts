import { Injectable } from '@nestjs/common';
import { ProductInput } from './dto/product-input';
import { Product } from './models/product';

@Injectable()
export class ProductsService {
  /**
   * MOCK
   */
  productsFromFakeDb = [{ id: 1, name: 'A' }];

  async create(data: ProductInput): Promise<Product> {
    let nextId = 0;
    if (this.productsFromFakeDb.length > 0) {
      nextId = Math.max.apply(Math, this.productsFromFakeDb.map(function (o) { return o.id + 1; }))
    }
    this.productsFromFakeDb.push({ id: nextId, name: data.name });
    return this.findOneById(nextId);
  }

  async update(id: number, data: ProductInput): Promise<Product> {
    const index = await this.findElementIndex(id);
    if (index == null) {
      return null;
    }
    this.productsFromFakeDb[index].name = data.name;
    return this.productsFromFakeDb[index] as Product;
  }

  async findOneById(id: number): Promise<Product> {
    const index = await this.findElementIndex(id);
    if (index == null) {
      return null;
    }
    return this.productsFromFakeDb[index] as Product;
  }

  private async findElementIndex(id: number): Promise<number> {
    const selectedProductIndex = this.productsFromFakeDb.findIndex(product => product.id == id);
    if (selectedProductIndex == -1) {
      return null;
    }
    return selectedProductIndex;
  }

  async findAll(): Promise<Product[]> {
    return this.productsFromFakeDb as Product[];
  }

  async remove(id: number): Promise<boolean> {
    const index = await this.findElementIndex(id);
    if (index == null) {
      return null;
    }
    this.productsFromFakeDb.splice(index, 1);
    return true;
  }
}