import React, { useState } from 'react';
import ProductCard from '../productCardF/ProductCard';
import { ListContainer } from './ProductList.styled';
import ProductModal from '../productModalF/ProductModal';

const ProductList = ({ products, filter }) => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filterProducts = () => {
    const { searchQuery, selectedCategory, sortOrder } = filter;

    let filteredProducts = [...products];

    if (searchQuery) {
      filteredProducts = filteredProducts.filter((product) =>
        product.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      filteredProducts = filteredProducts.filter(
        (product) => product.name.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    if (sortOrder === 'asc') {
      filteredProducts.sort((a, b) => parseInt(a.price) - parseInt(b.price));
    } else if (sortOrder === 'desc') {
      filteredProducts.sort((a, b) => parseInt(b.price) - parseInt(a.price));
    }

    return filteredProducts;
  };

  const filteredProducts = filterProducts();
  const handleViewMore = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  return (
    <ListContainer>
      {filteredProducts.map((product, index) => (
        <ProductCard key={index}
          product={product}
          onViewMore={() => handleViewMore(product)}
        />
      ))}
      {isModalOpen && selectedProduct && (
        <ProductModal
          product={selectedProduct}
        />
      )}
    </ListContainer>
  );
};

export default ProductList;
