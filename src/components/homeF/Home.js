import React from 'react';
import ZooPicture from "../img/Zoo.jpg";
import { HomeContainer, HomeImage, HomeText, HomeTitle, HomeContent, ImageWithTextContainer, Image, Text, CardContainer, HomeMain, HomeBut } from './Home.styled'

const ImageWithText = ({ imageSrc, altText, text }) => {
    return (
        <ImageWithTextContainer>
            <Image src={imageSrc} alt={altText} />
            <Text>{text}</Text>
        </ImageWithTextContainer>
    );
};

const CardList = ({ card }) => {
    return (
        <CardContainer>
            {card.map((card) => (
                <ImageWithText imageSrc={card.image} altText="Image" text={card.description} />
            ))}
        </CardContainer>
    );
};

const Home = ({cards}) => {
    return (
        <HomeMain>
            <HomeContainer>
                <HomeImage className='zooPicture' src={ZooPicture} alt="Fail" />
                <HomeContent>
                    <HomeTitle>ZooMania</HomeTitle>
                    <HomeText>Welcome to ZooMania, your gateway to the animal kingdom! Explore a world of fascinating creatures,
                        from majestic lions to playful penguins. Discover the wonders of the wild right here.</HomeText>
                </HomeContent>
            </HomeContainer>
            <CardList card={cards} />
            <HomeBut>
                <a className='SeeMoreBut' href='/'>See More</a>
            </HomeBut>
        </HomeMain>
    );
};

export default Home;
