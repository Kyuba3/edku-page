import React, { useState, useEffect } from 'react';
import SingleProduct from './SingleProduct';
import { Product } from '../../models/Product';
import { mockProducts } from './mockProducts';

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      //const response = await fetch('https://your-api-endpoint/products');
      //const data: Product[] = await response.json();
      setTimeout(() => {
        setProducts(mockProducts);
      }, 100);
    };

    fetchProducts().catch(console.error);
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product: Product) => (
          <SingleProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;