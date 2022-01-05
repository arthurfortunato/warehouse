import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { Home } from "../pages/Home";
import { Products } from "../pages/Products";
import { ProductsList } from "../pages/ListProducts";
import EditProducts  from "../pages/EditProducts";

export const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newProducts" element={<Products />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/editproducts/:id" element={<EditProducts />} />
      </Routes>
    </BrowserRouter>
  )

};
