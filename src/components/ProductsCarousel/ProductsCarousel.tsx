import React, { useState } from 'react';
import SingleProduct from '../../pages/Products/SingleProduct';
import { Product } from '../../models/Product';
import './ProductsCarousel.scss';
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

interface ProductsCarouselProps {
  products: Product[];
}

const ProductsCarousel: React.FC<ProductsCarouselProps> = ({ products }) => {
  const [visibleStart, setVisibleStart] = useState(0);
  const visibleCount = 4;

  const goToNext = () => {
    setVisibleStart((prevStart) =>
      prevStart + 1 < products.length ? prevStart + 1 : 0
    );
  };

  const goToPrevious = () => {
    setVisibleStart((prevStart) =>
      prevStart - 1 >= 0 ? prevStart - 1 : products.length - 1
    );
  };

  return (
    <div className="products-carousel-wrapper max-w-7xl mx-auto">
      <div className='carousel-controls left' onClick={goToPrevious}>
        <MdKeyboardArrowLeft size={25} />
      </div>
      <div className="carousel-content">
        {products
          .slice(visibleStart, visibleStart + visibleCount)
          .concat(products.slice(0, Math.max(visibleStart + visibleCount - products.length, 0)))
          .map((product, index) => (
            <div key={index} className="carousel-item">
              <SingleProduct product={product} />
            </div>
          ))
        }
      </div>
      <div className='carousel-controls right' onClick={goToNext}>
        <MdKeyboardArrowRight size={25} />
      </div>
    </div>
  );
};

export default ProductsCarousel;