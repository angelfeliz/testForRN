import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Button
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Test1 from './Test1';
import Test2 from './Test2'
  
  export default Main = StackNavigator({
    Home: { screen: Test1  },
    Page: { screen: Test2 },
  });



