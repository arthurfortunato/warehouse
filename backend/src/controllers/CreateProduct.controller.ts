import { Request, Response } from 'express';
import { CreateProductService } from '../services/CreateProduct.service'

export class CreateProductController {
  async handle(request: Request, response: Response) {

    const product = request.body;

    const createProductService = new CreateProductService();

    const products = await createProductService.execute(product);

    return response.json(products);
  }

  async getProducts(request: Request, response: Response) {
    
    const productService = new CreateProductService();

    const getProducts = await productService.getProducts()

    return response.json(getProducts)
  }
}