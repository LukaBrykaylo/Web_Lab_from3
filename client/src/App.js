import React from 'react';
import Header from './components/headerF/Header';
import Home from './components/homeF/Home';
import Footer from './components/footerF/Footer';
import Catalog from './components/catalogF/Catalog';
import CatPicture from "./components/img/cat.jpg";
import Dog1Picture from "./components/img/dog1.jpg";
import ElephantPicture from "./components/img/elephant.jpg";
import Dog2Picture from "./components/img/dog2.jpg";
import GiraffePicture from "./components/img/giraffe.jpg";
import ParrotPicture from "./components/img/parrot.jpg";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductModalPage from './components/productModalPageF/productModalPage';
import Cart from "./components/cartF/Cart";
import './App.css';
import Checkout from './components/checkoutF/Checkout';
import Success from './components/checkoutF/Success';

const cards = [
  {
    description: 'Meet our charming feline friend, Whiskers. Whiskers is a playful and curious cat with soft, fluffy fur and beautiful green eyes. This mischievous kitty loves to chase toys, bask in the sun, and curl up on your lap for a cozy nap.',
    image: CatPicture,
  }, {
    description: 'Introducing our lovable canine companion, Max. Max is an energetic and friendly dog with a wagging tail and a heart full of loyalty. This adorable pup enjoys long walks in the park, playing fetch, and cuddling on the couch with you.',
    image: Dog1Picture,
  }, {
    description: 'Meet our majestic gentle giant, Ella. Ella is a magnificent elephant with enormous ears and a wise presence. This incredible creature exudes grace and strength as she roams the vast savannahs and forests of the wild. Ellas powerful but tender nature makes her a symbol of wisdom and dignity.',
    image: ElephantPicture,
  }, {
    description: 'a playful and curious cat with softThis mischievous kitty loves to chase toys, bask in the sun, and curl up on your lap for a cozy nap.',
    image: ParrotPicture,
  }, {
    description: 'a wagging tail and a heart full of loyalty. This adorable pup enjoys long walks in the park, playing fetch, and cuddling on the couch with you.',
    image: GiraffePicture,
  }, {
    description: 'ence. This incredible creature exudes grace and strength as she roams the vast savannahs and forests of the wild. Ellas powerful but tender nature makes her a symbol of wisdom and dignity.',
    image: Dog2Picture,
  }, {
    description: 'a playful and curious cat with softThis mischievous kitty loves to chase toys, bask in the sun, and curl up on your lap for a cozy nap.',
    image: Dog1Picture,
  }, {
    description: 'a wagging tail and a heart full of loyalty. This adorable pup enjoys long walks in the park, playing fetch, and cuddling on the couch with you.',
    image: ElephantPicture,
  },
]

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="dark-background">
          <Routes>
            <Route path="/" element={<Home cards={cards} />} />
            <Route path="/catalog" element={<Catalog  />} />
            <Route path="/product/:productId" element={<ProductModalPage />} />
            <Route path="/Cart" element={<Cart/>} />
            <Route path="/Cart/checkout" element={<Checkout/>} />
            <Route path="/Cart/success" element={<Success/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
