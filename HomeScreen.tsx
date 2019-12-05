import React from 'react';
import { View, Text, Button } from 'react-native'
import { withNavigation } from "react-navigation";
import { NavigationStackScreenProps } from 'react-navigation-stack';

type Params = {};

type ScreenProps = { language: string };

class HomeScreen extends React.Component<NavigationStackScreenProps<Params, ScreenProps>> {
    render() {
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Welcome to home screen!</Text>
            <Button title = 'Go to Profile' 
                onPress={() => this.props.navigation.navigate('Profile')}
            />
          </View>
        )
    }
}

export default withNavigation(HomeScreen)