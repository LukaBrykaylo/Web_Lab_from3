import styled from '../styled';

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background: #f5f5f5;
  padding: 20px;
  text-align: center;
`;

const HomeImage = styled.img`
  max-width: 550px;
  height: auto;
  margin-bottom: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.5);


`;

const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  max-width: 500px;
`;

const HomeTitle = styled.p`
  font-size: 36px;
  margin-left: 160px;
  margin-top: -20px;
  font-weight: 600;
`;

const HomeText = styled.p`
  font-size: 20px;
  color: #333;
  margin-left: 50px;
`;


const ImageWithTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 60px;
  margin-right: 60px;
  padding-top: 10px;
  background-color: #ededed;
  border-radius: 5px;
  margin-bottom: 100px;
  width: 300px;
  box-shadow: 0px 0px 8px 0px black
`;

const Image = styled.img`
  max-width: 450px;
  height: auto;
`;

const Text = styled.p`
  font-size: 16px;
  color: #333;
  margin-top: 10px;
  padding: 0 5px;
  text-align: center;
  font-size: 18px;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  width: 100%;
`;

const HomeMain = styled.div`

`;

const HomeBut = styled.div`
  a{
    background-color: #565656;
    color: #fff;
    cursor: pointer;
    border-radius: 8px;
    padding: 10px 20px;
    font-size: 18px;
    border: none;
    display: flex;
    justify-content: center;
    width: 143px;
    margin: 0 auto;
    padding-right: 25px;
  }

  a::after {
    color: white;
    content: '';
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;
    border-left: 15px solid #fff;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    margin-left: 8px;
    margin-top: 13px;
  }

  padding-bottom: 150px;
`;


export { HomeContainer, HomeImage, HomeText, HomeTitle, HomeContent, ImageWithTextContainer, Image, Text, CardContainer, HomeMain, HomeBut };
