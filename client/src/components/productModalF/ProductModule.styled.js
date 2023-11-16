import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 5px;
  width: 700px;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

export const TopContent = styled.div`
  display: flex;
`;

export const AnimalImage = styled.img`
  width: 276px;
  height: 183px;
  margin-right: 20px;
`;

export const DescriptionContainer = styled.div`
  flex: 1;
`;

export const AnimalName = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

export const AnimalDescription = styled.p`
  font-size: 16px;
  margin-bottom: 15px;
`;

export const BottomContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

export const CloseButton = styled.button`
  background-color: #565656;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #323232;
  }
`;

export const AddToCartButton = styled.button`
  background-color: #2ecc71;
  color: #fff;
  cursor: pointer;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #27ae60;
  }
`;

export const Rating = styled.div`
  display: flex;
  flex-direction: row;
  
  Rate{
    margin-left: 30px;
  }
`