import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom/cjs/react-router-dom.min';

import Cart from './pages/Cart';
import Cars from './pages/Cars';
import Dress from './pages/Dress';
import Home from './pages/Home';
import Game from './pages/Game';
import Seller from './pages/Seller';

import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {

  const Navlinks = [
    { 'to': '/dress', 'content': 'Dress' },
    { 'to': '/game', 'content': 'Game' },
    { 'to': '/cart', 'content': 'Cart' },
    { 'to': '/cars', 'content': 'Cars' }

  ];

  const Sellers = [
    {name:'Kamil İşler'},
    {name:'Hamit Can Daşçi'},
    {name:'Ahmet Hakan Demirel'},
    {name:'Yekta Yüksel'}
  ];

  return (

    <Router>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=BioRhyme:wght@700&display=swap');
      </style>


      <div className="App">
        <Navbar links={Navlinks} />

        <Switch>

          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/dress'>
            <Dress />
          </Route>

          <Route path='/Game'>
            <Game />
          </Route>

          <Route path='/cart'>
            <Cart />
          </Route>

          <Route path='/cars'>
            <Cars />
          </Route>

          <Route path='/seller'>
            <Seller />
          </Route>

        </Switch>

        <Footer />
      </div>

    </Router>

  );
}

export default App;
