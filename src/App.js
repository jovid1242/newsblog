import React from 'react';

import { BrowserRouter as Router, witch, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contacts from './components/pages/Contacts';
import Post from './components/pages/Post';
import Login from './components/pages/Login';

function App() {
  return (
    <div>
      <Router>
        {/* <Switch>  */}
        <Header />
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contacts" component={Contacts} />
        <Route path="/login" component={Login} />

        <Route path="/post" component={Post} />
        {/* </Switch> */}
      </Router>
      <Footer />
    </div>
  )
}

export default App