import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator, NavigationStackOptions, NavigationStackProp, NavigationStackScreenProps } from 'react-navigation-stack';
import ProfileScreen from './ProfileScreen';
import HomeScreen from './HomeScreen';

const App = createStackNavigator(
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