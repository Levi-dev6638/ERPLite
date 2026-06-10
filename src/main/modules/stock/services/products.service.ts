import { Repository } from 'typeorm';
import { Product } from '../models/product.model';

export class ProductsService {
  constructor(private productRepository: Repository<Product>) {}

  async listProducts() {
    const products = await this.productRepository.find();
    return products;
  }
}
 