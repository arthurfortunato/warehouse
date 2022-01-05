import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Product } from '../entities/Product';
import { AppError } from '../error/AppError';

interface ICreateProduct {
  name: string;
  code: string;
  sector: string;
  price: number;
}

export class CreateProductService {

  async execute(product: ICreateProduct) {
    const productRepository = getRepository(Product);

    if (!product.name) {
      throw new AppError('Incorrect Name', 401)
    }
    if (!product.code) {
      throw new AppError('Incorrect Code', 401)
    }
    if (!product.sector) {
      throw new AppError('Incorrect Sector', 401)
    }
    if (!product.price) {
      throw new AppError('Incorrect Price', 401)
    }

    const productAlreadyExists = await productRepository.findOne({ where: { code: product.code } })

    if (productAlreadyExists) {
      throw new AppError('Existing product', 401);
    }

    await productRepository.save(product);

    return { product };
  }

  async getProducts() {
    const productRepository = getRepository(Product);

    const currentProduct = await productRepository.find()

    if (!currentProduct) {
      throw new AppError('Product not found', 401);
    }

    return currentProduct;
  }

  async edit(request: Request, response: Response) {
    const {id} = request.params;
    const productRepository = getRepository(Product);

    const {
      name,
      code,
      sector,
      price,
    } = request.body;

    const currentProduct = await productRepository.findOne(id)

    currentProduct.name = name;
    currentProduct.code = code;
    currentProduct.sector = sector;
    currentProduct.price = price;

    await productRepository.save(currentProduct)

    return response.send(currentProduct)
  }

  async destroy(request: Request, response: Response) {
    const productRepository = getRepository(Product);

    const product = await productRepository.delete(request.params.id);

    return response.send(product)
  }
}