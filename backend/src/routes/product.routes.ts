import { Router } from 'express';
import { CreateProductController } from '../controllers/CreateProduct.controller';
import { CreateProductService } from '../services/CreateProduct.service'

export const productRoutes = Router();
const productController = new CreateProductController();
const productService = new CreateProductService();

productRoutes.post('/newproducts', productController.handle);
productRoutes.get('/myproducts', productController.getProducts);
productRoutes.delete('/delete/:id', productService.destroy);
productRoutes.put('/edit/:id', productService.edit);
