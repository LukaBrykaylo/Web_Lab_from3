import React, { useState } from 'react';
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

const Home = ({ cards }) => {
    const [visibleCardCount, setVisibleCardCount] = useState(3); // Початкова кількість видимих карток

    const loadMore = () => {
        setVisibleCardCount(visibleCardCount + 3); // Збільшення кількості видимих карток при кожному кліку
    };

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
            <CardContainer>
                {cards.slice(0, visibleCardCount).map((card, index) => (
                    <ImageWithText key={index} imageSrc={card.image} altText="Image" text={card.description} />
                ))}
            </CardContainer>
            {visibleCardCount < cards.length && (
                <HomeBut>
                    <a className='SeeMoreBut' onClick={loadMore} href='#'>View More</a>
                </HomeBut>
            )}
        </HomeMain>
    );
};

export default Home;
