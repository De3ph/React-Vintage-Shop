import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom/cjs/react-router-dom.min';

import Cart from './pages/Cart';
import Cars from './pages/Cars';
import Home from './pages/Home';
import Game from './pages/Furniture';
import WallArts from './pages/WallArts';
import Seller from './pages/Seller';

import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App() {

  const Navlinks = [
    { 'to': '/wallArts', 'content': 'Wall Arts' },
    { 'to': '/furniture', 'content': 'Furniture' },
    { 'to': '/cars', 'content': 'Cars' },
    { 'to': '/cart', 'content': <i class="bi bi-cart fs-1"></i> }

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

          <Route path='/wallArts'>
            <WallArts />
          </Route>

          <Route path='/game'>
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
