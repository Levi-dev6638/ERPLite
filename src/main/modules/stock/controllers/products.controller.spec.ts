import { describe, it, expect, vi, beforeEach, beforeAll } from 'vitest';
import { ProductsController } from './products.controller';
import { ProductsService } from '../services/products.service';

describe('ProductsController', () => {
  let controller: ProductsController;

  beforeAll(() => {
    const mockService = {
      listProducts: vi.fn().mockReturnValue([{ id: 1, name: 'Teste' }]),
    } as unknown as ProductsService;

    controller = new ProductsController(mockService);
  });

  beforeEach(() => {
    vi.restoreAllMocks();
  });4

  it('deve retornar os produtos usando Injeção de Dependência', () => {
    expect(controller.index()).toEqual([{ id: 1, name: 'Teste' }]);
  });
});
 