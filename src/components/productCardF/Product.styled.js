import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  padding: 16px;
  text-align: center;
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.2);
  width: 300px;
  margin: 16px;
`;

const ProductName = styled.h3`
  font-size: 18px;
  margin: 10px 0;
`;

const ProductDescription = styled.p`
  color: #555;
`;

const ProductPrice = styled.span`
  font-weight: bold;
  font-size: 16px;
`;

export {CardContainer, ProductName, ProductDescription, ProductPrice}