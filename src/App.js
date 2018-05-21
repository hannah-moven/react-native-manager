import React, { Component } from 'react';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
// import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
// import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBg0HFhM-ckVuu_7whOQgPSby4SGrn45cQ',
      authDomain: 'manager-154f2.firebaseapp.com',
      databaseURL: 'https://manager-154f2.firebaseio.com',
      projectId: 'manager-154f2',
      storageBucket: '',
      messagingSenderId: '487617072828'
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
