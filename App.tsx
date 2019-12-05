import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator, NavigationStackOptions, NavigationStackProp, NavigationStackScreenProps } from 'react-navigation-stack';
import ProfileScreen from './ProfileScreen';
import HomeScreen from './HomeScreen';

const App = createSwitchNavigator(
  {
    Home: { screen: HomeScreen },
    Profile: { screen: ProfileScreen }
  }, 
  {
    initialRouteName: 'Home'
  }
)
const AppContainer = createAppContainer(App);

export default AppContainer;