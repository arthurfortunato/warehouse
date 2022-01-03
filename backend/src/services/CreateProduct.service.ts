import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Product } from '../entities/Product';

interface ICreateProduct {
  name: string;
  code: string;
  sector: string;
  price: number;
}

export class CreateProductService {

  async execute({ name, code, sector, price }: ICreateProduct) {
    const productRepository = getRepository(Product);

    if (!name) {
      throw new Error('Incorrect Name')
    }
    if (!code) {
      throw new Error('Incorrect Code')
    }
    if (!sector) {
      throw new Error('Incorrect Sector')
    }
    if (!price) {
      throw new Error('Incorrect Price')
    }

    const productAlreadyExists = await productRepository.findOne(code)

    if (productAlreadyExists) {
      throw new Error('Produto já existente');
    }

    const newProduct = productRepository.create({
      name, code, sector, price
    });

    await productRepository.save(newProduct);

    return newProduct;
  }

  async getProducts() {
    const productRepository = getRepository(Product);

    const currentProduct = await productRepository.find()

    if (!currentProduct) {
      throw new Error('Produto não encontrado')
    }

    return currentProduct;
  }
}