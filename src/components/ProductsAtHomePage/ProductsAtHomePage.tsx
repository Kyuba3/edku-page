import React, { useEffect, useState } from "react";
import { HiOutlineDotsHorizontal } from "react-icons/hi"
import ProductsCarousel from "../ProductsCarousel/ProductsCarousel";
import { Product } from '../../models/Product';
import { mockProducts } from '../../pages/Products/mockProducts';

const ProductsAtHome = () => {

  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      setTimeout(() => {
        setProducts(mockProducts);
      }, 100);
    };

    fetchProducts().catch(console.error);
  }, []);

  return (
    <div className="mt-10">
      <HiOutlineDotsHorizontal className="article-dot-icon" size={60} />
      <h2 className="text-3xl font-semibold text-center mb-6">
        Nasze Produkty
      </h2>
      <ProductsCarousel products={products} />
    </div>
  )
}

export default ProductsAtHome;