
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Link, 
  Switch
} from 'react-router-dom'

import Home from './components/home/Home';
import Friends from './components/friends/Friends';
import FriendDetail from './components/FriendDetail/FriendDetail';
import About from './components/about/About';
import NotFound from './components/not-found/NotFound';

function App() {
  return (
    <Router >
      <div className="App container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link to ='/' className="navbar-brand" >WeDevs</Link>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/" className="nav-link active">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/friends" className="nav-link">Friends</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-link" >About</Link>
                </li>
                <li className="nav-item">
                  <Link to='/*' className="nav-link" >NotFound</Link>
                </li>
              </ul>

            </div>
          </div>
        </nav>

        <Switch >
          <Route path='/' exact>
              <Home />
            </Route>

            <Route exact path='/friends' >
              <Friends />
            </Route>

            <Route path='/about' >
              <About />
            </Route>

            <Route path='/friend/:id'>
              <FriendDetail />
            </Route>

            <Route >
              <NotFound />
            </Route>
          </Switch>

      </div>
    </Router>
  );
}

export default App;
