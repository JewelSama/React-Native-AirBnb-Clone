import { View, Text } from 'react-native'
import React from 'react'
import HomeScreen from '../screens/Home'
import { createStackNavigator } from '@react-navigation/stack'
import SearchResultScreen from '../screens/searchResults'
import SearchResultTabNavigator from './SearchResultTabNavigator'


const Stack = createStackNavigator();


const Router = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name={'Welcome'}
            component={HomeScreen}
            options={{
                headerShown: false,
            }}
        />
        <Stack.Screen 
            name={'SearchResults'}
            component={SearchResultTabNavigator}
            options={{
                title:"Search your destination",
                // headerShown: false,
            }}
        />
    </Stack.Navigator>


    )
}

export default Router;