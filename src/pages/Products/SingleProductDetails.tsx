import React from 'react';
import { useParams } from 'react-router-dom';
import { mockProducts } from './mockProducts';

const SingleProductDetail: React.FC = () => {
  const { productId } = useParams<{productId: string}>();

  const product = productId ? mockProducts.find(p => p.id === parseInt(productId)) : undefined;

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-48 w-full object-cover md:h-full md:w-48" src={mockProducts[1].image} alt={product.name} />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{product.name}</div>
            <p className="mt-2 text-gray-500">{product.description}</p>
            <div className="mt-4">${product.price}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductDetail;