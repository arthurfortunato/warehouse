import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { Home } from "../pages/Home";
import { Products } from "../pages/Products";
import { ProductsList } from "../pages/ListProducts";

export const Router = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newProducts" element={<Products />} />
        <Route path="/products" element={<ProductsList />} />
      </Routes>
    </BrowserRouter>
  )

};
