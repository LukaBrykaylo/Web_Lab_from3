import React, { useState } from 'react';
import {
    SelectSortOrder,
    SelectCategory,
    SearchInput,
    FindBut,
    CatalogOptions,
} from './FilterOpt.styled';

const FilterOptions = ({ onFilterChange }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [sortOrder, setSortOrder] = useState('asc');

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
    };

    const handleSortChange = (order) => {
        setSortOrder(order);
    };

    const handleApplyFilter = () => {
        onFilterChange({ searchQuery, selectedCategory, sortOrder });
    };

    return (
        <CatalogOptions>
            <SearchInput
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
            />
            <SelectCategory
                value={selectedCategory}
                onChange={(e) => handleCategoryChange(e.target.value)}
            >
                <option value="all">All Categories</option>
                <option value="dog">Dogs</option>
                <option value="cat">Cats</option>
                <option value="elephant">Elephants</option>
                <option value="giraffe">Giraffes</option>
                <option value="parrot">Parrots</option>
            </SelectCategory>
            <SelectSortOrder
                value={sortOrder}
                onChange={(e) => handleSortChange(e.target.value)}
            >
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </SelectSortOrder>
            <FindBut onClick={handleApplyFilter} href='#'>Apply</FindBut>
        </CatalogOptions>
    );
};

export default FilterOptions;
