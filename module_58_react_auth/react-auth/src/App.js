import './App.css';

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import firebaseInialization from './Firebase/firebase.initialize';
import AuthContext from './context/AuthProvider';

firebaseInialization();


function App() {
  return (
    <div className="App">
      <BrowserRouter> 
        <Header />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/register">
            <Register />
          </Route>

          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
