import React from 'react';
import { Product } from '../../models/Product';
import { useNavigate } from 'react-router';
import './Products.scss';

interface ProductCardProps {
  product: Product;
}

const SingleProduct: React.FC<ProductCardProps> = ({ product }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/products/${product.id}`);
  }

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white h-50 singleProduct-container" onClick={handleClick}>
      <img className="w-full" src={product.image} alt={product.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base">
          {product.description}
        </p>
      </div>
      <div className="px-6 pt-2 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">$ {product.price}</span>
      </div>
    </div>
  );
};

export default SingleProduct;