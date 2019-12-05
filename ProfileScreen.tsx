import React from 'react';
import { View, Text, Button } from 'react-native'
import { withNavigation } from "react-navigation";
import { NavigationStackScreenProps } from 'react-navigation-stack';

type Params = { deviceId: string };

type ScreenProps = { language: string };

class ProfileScreen extends React.Component<NavigationStackScreenProps<Params, ScreenProps>> {
    render() {
        return (
          <View>
            <Text>Profile: </Text>
            <Text>Language: </Text>
            <Text>Device ID: </Text>
          </View>
        )
    }
}

export default withNavigation(ProfileScreen)