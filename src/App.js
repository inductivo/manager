import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';

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

  render () {
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
          Hola Juan Ma
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
