import React, { useState } from 'react';
import ProductList from '../productListF/ProductList';
import { CatalogContainer, EmptyDiv } from './Catalog.styled';
import FilterOptions from '../filterOptionsF/FilterOpt';

const Catalog = ({ product }) => {
    const [filter, setFilter] = useState({
        searchQuery: '',
        selectedCategory: 'all',
        sortOrder: 'asc',
    });

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    };

    return (
        <CatalogContainer>
            <FilterOptions onFilterChange={handleFilterChange} />
            <EmptyDiv>
                <ProductList
                    filter={filter}
                />
            </EmptyDiv>
        </CatalogContainer>
    );
};

export default Catalog;
