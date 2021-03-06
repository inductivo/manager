import React, { Component } from 'react';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
     apiKey: "AIzaSyAh3zW44CaoertvSXuHQL9jpiBa7lyVnd4",
     authDomain: "manager-d6f71.firebaseapp.com",
     databaseURL: "https://manager-d6f71.firebaseio.com",
     projectId: "manager-d6f71",
     storageBucket: "manager-d6f71.appspot.com",
     messagingSenderId: "55258992836"
   };
   firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
