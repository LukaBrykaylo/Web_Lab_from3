import React from 'react';
import { useParams } from 'react-router-dom';
import ProductModal from '../productModalF/ProductModal';

const ProductModalPage = ({ products }) => {
  const { productId } = useParams();
  const selectedProduct = products.find(product => product.id.toString() === productId);

  return (
    <div>
      {selectedProduct && <ProductModal product={selectedProduct} />}
    </div>
  );
};

export default ProductModalPage;
