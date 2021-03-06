import { View, Text } from 'react-native'
import React from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import SearchResultScreen from '../screens/searchResults';
import SearchResultsMap from '../screens/SearchResultsMap';

const Tab = createMaterialTopTabNavigator();

const SearchResultTabNavigator = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: '#f15454',
            tabBarIndicatorStyle:{
                backgroundColor: '#f15454'
            }
        }}>
            <Tab.Screen 
                name={"List"}
                component={SearchResultScreen}
            />
            <Tab.Screen 
                name={"map"}
                component={SearchResultsMap}
            />
        </Tab.Navigator>
  )
}

export default SearchResultTabNavigator;