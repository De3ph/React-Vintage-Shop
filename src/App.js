import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom/cjs/react-router-dom.min';

import Dress from './pages/Dress';
import Home from './pages/Home';
import Game from './pages/Game';
import Cart from './pages/Cart';

import Navbar from './components/Navbar';

function App() {

  let links = [
    { 'to': '/dress', 'content': 'Dress' },
    { 'to': '/game', 'content': 'Game' },
    { 'to': '/cart', 'content': 'Cart' }
  ];

  return (

    <Router>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=BioRhyme:wght@700&display=swap');
      </style>


      <div className="App">
        <Navbar links={links} >
        </Navbar>

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

        </Switch>
      </div>

    </Router>

  );
}

export default App;
