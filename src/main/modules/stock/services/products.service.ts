import { Repository } from 'typeorm';
import { Product } from '../models/product.model';
import { AppDataSource } from '../../../services/datasource';

export class ProductsService {
  private productRepository: Repository<Product>;

  constructor() {
    this.productRepository = AppDataSource.getRepository(Product);
  }

  async listProducts() {
    const products = await this.productRepository.find();

    return products;
  }
}
 