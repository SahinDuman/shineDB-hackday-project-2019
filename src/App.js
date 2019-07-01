import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './css/App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Movie from './components/Movie';
import Search from './components/Search';

function App() {

  return (
    <Router>
      <div className="App">
        <Nav />
      <Route
        path="/" exact
        render={() => <Home />}
        >
      </Route>

      <Route
        path="/movie/:id"
        render={(props) => <Movie {...props} data={props.data} />}
        exact
        />
      <Route
        path="/categories"
        exact
        />
      <Route
        path="/about"
        render={(props) => <About {...props} data="nope" />}
        exact
        />
      <Route path="/search" render={(props) => <Search {...props} />}/>
        </div>

    </Router>
  );
}

export default App;
