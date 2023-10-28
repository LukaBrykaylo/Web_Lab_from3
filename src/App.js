import React from 'react';
import Header from './components/headerF/Header';
import Home from './components/homeF/Home';
import Footer from './components/footerF/Footer';
import CatPicture from "./components/img/cat.jpg";
import DogPicture from "./components/img/dog1.jpg";
import ElephantPicture from "./components/img/elephant.jpg";
// import ProductList from './components/productListF/ProductList';
import './App.css';

// const products = [
//   {
//     name: 'Product',
//     description: 'Description for Product',
//     price: '2200$',
//     image: 'product1.jpg',
//   },
// ]

const cards = [
  {
    description: 'Meet our charming feline friend, Whiskers. Whiskers is a playful and curious cat with soft, fluffy fur and beautiful green eyes. This mischievous kitty loves to chase toys, bask in the sun, and curl up on your lap for a cozy nap.',
    image: CatPicture,
  },{
    description: 'Introducing our lovable canine companion, Max. Max is an energetic and friendly dog with a wagging tail and a heart full of loyalty. This adorable pup enjoys long walks in the park, playing fetch, and cuddling on the couch with you.',
    image: DogPicture,
  },{
    description: 'Meet our majestic gentle giant, Ella. Ella is a magnificent elephant with enormous ears and a wise presence. This incredible creature exudes grace and strength as she roams the vast savannahs and forests of the wild. Ellas powerful but tender nature makes her a symbol of wisdom and dignity.',
    image: ElephantPicture,
  },
]

function App() {
  return (
    <div className="App">
      <Header />
      <div className="dark-background">
        {/* <ProductList products={products} /> */}
        <Home  cards={cards} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
