import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import About from './components/About';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';

import './App.css';

const store = createStore(reducers);

class App extends Component {

  render() {
    return (
      <Router>
        <Provider store={store}>
          <Header title='Padaula' />
          <Sidebar />
          <Route path='/about' component={About} />
          <Route path='/' exact component={Main} />
        </Provider>
      </Router>
    );
  }
}

export default App;
