import styled from '../styled';

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

const Image = styled.img`
  max-width: 300px;
  height: auto;
`;

const ViewMoreBut = styled.a`
  background-color: #474747;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  display: flex;
  justify-content: center;
  width: 100px;
  margin: 0 auto;
  margin-bottom: 11px; 
  text-align: center;
  text-decoration: none;
  margin-top: 40px;
  &:hover {
    background-color: #323232
  }
`;

export {CardContainer, ProductName, ProductDescription, ProductPrice, Image, ViewMoreBut}