import { useState, useEffect } from 'react';
import React from 'react';
import { useParams } from 'react-router-dom';
import ProductModal from '../productModalF/ProductModal';
import axios from 'axios';

const ProductModalPage = ({ }) => {
  const { productId } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/product/${productId}`)
      .then(response => setSelectedProduct(response.data.data[0]))
      .catch(error => console.error('Error fetching product details:', error));
  }, [productId]);

  return (
    <div>
      {selectedProduct && <ProductModal product={selectedProduct} />}
    </div>
  );
};

export default ProductModalPage;
