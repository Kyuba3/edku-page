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
  };

  const truncateDescription = (description: string, maxLength: number) => {
    if (description.length <= maxLength) return description;
    return `${description.slice(0, maxLength)}...`;
  };

  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg bg-white singleProduct-container cursor-pointer"
      onClick={handleClick}
    >
      <img className="w-full h-48 object-contain" src={product.images[0]} alt={product.name} />
      <div className="px-6 py-4 flex flex-col h-full">
        <div className="font-bold text-xl mb-2">{product.name}</div>
        <p className="text-gray-700 text-base flex-grow">
          {truncateDescription(product.description, 100)}
        </p>
      </div>
      <div className="px-6 pt-2 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          $ {product.price}
        </span>
      </div>
    </div>
  );
};

export default SingleProduct;
