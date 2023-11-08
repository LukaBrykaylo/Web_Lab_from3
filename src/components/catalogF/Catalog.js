import ProductList from '../productListF/ProductList';
import { CatalogContainer, EmptyDiv } from './Catalog.styled'
import FilterOptions from '../filterOptionsF/FilterOpt';

const Catalog = ({ products }) => {
    return (
        <CatalogContainer>
            <FilterOptions/>
            <EmptyDiv>
                <ProductList products={products} />
            </EmptyDiv>
        </CatalogContainer>
    );
};

export default Catalog;
