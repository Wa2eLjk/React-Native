
import React, { Component } from 'react';
import {  View, Text } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import homeScreen from './Component/homeScreen';
import newDeck from './newDeck';
import {createStore} from 'redux'
import reducer from './reducers'
import {Provider} from 'react-redux'
import Deck from './Component/deck'
import Quiz from './Component/quiz'
import AddCard from './Component/addCard'

const Tabs = createBottomTabNavigator(
  {
    Home: {
      screen: homeScreen,
      navigationOptions: {
        tabBarLabel: 'Home',
      },
    },
    NewDeck: {
      screen: newDeck,
      navigationOptions: {
        tabBarLabel: 'New Deck',
      },
    },
  },
  {
    navigationOptions: {
      header: null,
    },
    tabBarOptions: {
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: 'purple'
                  },
        shadowRadius: 6,
        shadowOpacity: 1,
      
    },
  }
);

const RootStack = createStackNavigator(
  {
      Home: Tabs,
      Details: Deck,
      quiz:Quiz,
      carAdd :AddCard

  },
  {
      initialRouteName: 'Home',
      headerMode:'screen'
  }
);
const AppContainer = createAppContainer(RootStack);

export default function App() {
  return (
    <Provider store={createStore(reducer)}>
    <View style={{ flex: 1 }}>
      <AppContainer />
    </View>
    </Provider>
  );
}
