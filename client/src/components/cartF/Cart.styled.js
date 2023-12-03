import styled from 'styled-components';


export const CartMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex-wrap: wrap;

  .Nothing{
    font-size: 40px;
    margin: 0 auto;
    margin-bottom: 400px;
    margin-top: 70px;
  }
`

export const AnimalImage = styled.img`
  width: 200px;
  border-radius: 8px;
`

export const DataInfo = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin-top: 10px;
  h3 {
    margin-left: 40px;
  }
`

export const Price = styled.div`
  margin-left: 40px;
`

export const DataButtonStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 40px;
  p {
    padding: 20px;
  }
  a {
    padding: 10px 17px;
    border-radius: 7px;
    border: 1px solid black;
    background-color: white;
    margin-right: 8px;
  }
`

export const CartButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 10px;
  align-items: center;
  margin-bottom: 90px;
`

export const DataList = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
`