import { useState, useEffect } from 'react';
import React from 'react';
import { useParams } from 'react-router-dom';
import ProductModal from '../productModalF/ProductModal';
import axios from 'axios';

const ProductModalPage = ({ }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/read')
      .then(response => setProducts(response.data.data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const { productId } = useParams();
  const selectedProduct = products.find(product => product.id.toString() === productId);

  return (
    <div>
      {selectedProduct && <ProductModal product={selectedProduct} />}
    </div>
  );
};

export default ProductModalPage;
