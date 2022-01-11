import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import 'animate.css'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom/cjs/react-router-dom.min';
import { useState } from 'react';

import Home from './pages/mainContents/Home';
import WallArts from './pages/mainContents/WallArts';
import Furniture from './pages/mainContents/Furniture';
import Cars from './pages/mainContents/Cars';
import Cart from './pages/mainContents/Cart';
import GiftCard from './pages/footerPages/GiftCard';
import About from './pages/footerPages/About';
import Contact from './pages/footerPages/Contact';
import Locations from './pages/footerPages/Locations';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AddedToCart from './components/AddedToCart';

function App() {

  const Navlinks = [
    { 'to': '/wallArts', 'content': 'Wall Arts' },
    { 'to': '/furniture', 'content': 'Furniture' },
    { 'to': '/cars', 'content': 'Cars' },
    { 'to': '/cart', 'content': <i class="bi bi-cart fs-1 text"></i>}

  ];

  const [cart, setCart] = useState([]);
  
  const [addedToCart, setAddedToCart] = useState(false);

  const addToCart = (item)=>{

    let newCart = [...cart];
    newCart.push(item);
    setCart(newCart);
    setAddedToCart(true);
  }

  const removeAddedToCart = () =>{
    setAddedToCart(false);
  }

  return (

    <Router>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=BioRhyme:wght@700&display=swap');
      </style>

      <div className="App">
        <Navbar links={Navlinks} />
        
        <Switch>
        {addedToCart && <AddedToCart callback = {removeAddedToCart} /> }
          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/wallArts'>
            <WallArts addToCart={addToCart} cart={cart} />
          </Route>

          <Route path='/furniture'>
            <Furniture addToCart={addToCart} cart={cart}/>
          </Route>

          <Route path='/cart'>
            <Cart cart={cart} />
          </Route>

          <Route path='/cars'>
            <Cars addToCart={addToCart} cart={cart}/>
          </Route>

          <Route path='/about'>
            <About/>
          </Route>

          <Route path='/contact'>
            <Contact/>
          </Route>

          <Route path='/locations'>
            <Locations/>
          </Route>

          <Route path='/giftCard'>
              <GiftCard addToCart={addToCart} cart={cart}/>
          </Route>

        </Switch>
        <Footer bgClass='bg-dark'/>

        
      </div>

    </Router>


  );
}

export default App;
