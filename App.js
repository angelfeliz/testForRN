import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './redux/reducers';
import Main from './views/Main';

const store = createStore(reducers,applyMiddleware(thunkMiddleware));
export default class App extends React.Component {
    constructor() {
      super();   
      
    }

  render() {    
    return (
      <Provider store={store}>
        <Main/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
