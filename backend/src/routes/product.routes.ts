import { Router } from 'express';
import { CreateProductController } from '../controllers/createproduct.controller';

export const productRoutes = Router();
const productController = new CreateProductController();

productRoutes.post('/newproducts', productController.handle);
productRoutes.get('/myproducts', productController.getProducts);
