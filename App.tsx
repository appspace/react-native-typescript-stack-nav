import React from 'react';
import { createAppContainer, createSwitchNavigator, NavigationRouteConfigMap, NavigationSwitchProp, CreateNavigatorConfig, NavigationSwitchRouterConfig } from 'react-navigation';
import { createStackNavigator, NavigationStackOptions, NavigationStackProp, NavigationStackScreenProps } from 'react-navigation-stack';
import ProfileScreen from './ProfileScreen';
import HomeScreen from './HomeScreen';

const routeConfigMap : NavigationRouteConfigMap<{}, NavigationSwitchProp> = {
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen }
}

const switchConfig : CreateNavigatorConfig<{}, NavigationSwitchRouterConfig, {}, NavigationSwitchProp> = {
  initialRouteName: 'Home', 
  backBehavior: "none", 
  resetOnBlur: false
}

const App = createSwitchNavigator(routeConfigMap, switchConfig)

const AppContainer = createAppContainer(App);

export default AppContainer;