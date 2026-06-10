import { ProductsService } from '../services/products.service';

export class ProductsController {
    constructor(private productsService: ProductsService) {}

    index() {
        return this.productsService.listProducts();
    }
}