import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { mockProducts } from './mockProducts';

const SingleProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = mockProducts.find(p => p.id === parseInt(productId ?? ''));
  
  const [selectedImage, setSelectedImage] = useState(product?.images[0] || '');

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden">
        
        <div className="md:w-1/2 flex flex-col items-center justify-center p-4">
          <div className="w-full h-96 flex items-center justify-center mb-4 single-product-image-container">
            <img className="object-cover h-full single-product-image" src={selectedImage} alt={product.name} />
          </div>
          <div className="flex space-x-2 overflow-x-auto product-thumbnails">
            {product.images.map((img, index) => (
              <img
                key={index}
                className={`h-20 w-20 object-cover cursor-pointer border ${selectedImage === img ? 'border-gray-500' : 'border-black-300'}`}
                src={img}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        <div className="md:w-1/2 p-8">
          <div className="uppercase tracking-wide text-sm font-semibold single-product-name">{product.name}</div>
          <div className='mt-2 font-bold single-product-description-header'>
            Description:
          </div>
          <div className="mt-2 overflow-auto max-h-80 single-product-description">
            {product.description}
          </div>
          <div className="mt-2 text-2xl font-bold single-product-details-price">
            ${product.price}
          </div>
          <button className="mt-4 bg-orange-500 text-white py-2 px-4 rounded">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductDetail;
