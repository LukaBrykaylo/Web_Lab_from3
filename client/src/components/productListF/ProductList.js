import React, { useState, useEffect } from 'react';
import ProductCard from '../productCardF/ProductCard';
import { ListContainer } from './ProductList.styled';
import ProductModal from '../productModalF/ProductModal';
import { getAnimals } from '../../fetching';
import LoadingPage from '../loadingF/Loading';

const ProductList = ({ filter }) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    const { searchQuery, selectedCategory, sortOrder } = filter;
    getAnimals(searchQuery, selectedCategory, sortOrder)
      .then((response) => {
        setProducts(response.data.data);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching products:', error));
  }, [filter]);

  if (products == null || products === undefined) {
    return;
  }

  const filteredProducts = products
  const handleViewMore = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <ListContainer>
      {loading ? (
        <LoadingPage />
      ) : (
        filteredProducts.map((product, index) => (
          <ProductCard key={index}
            product={product}
            onViewMore={() => handleViewMore(product)}
          />
        ))
      )}
      {isModalOpen && selectedProduct && (
        <ProductModal
          product={selectedProduct}
        />
      )}
    </ListContainer>
  );

}
export default ProductList;
