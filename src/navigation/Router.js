import React from 'react';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import DestinationSearch from '../screens/destinationSearch';
import GuestsScreen from '../screens/Guests';
import HomeTabNavigator from './HomeTabNavigator';


const Stack = createStackNavigator();

const Router = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name={"Home"}
                    component={HomeTabNavigator}
                    options={{
                        headerShown:false,
                        ...TransitionPresets.RevealFromBottomAndroid
                    }}
                    
                />
                <Stack.Screen 
                    name={"Destination Search"}
                    component={DestinationSearch}
                    options={{
                        title: "Search your destination",
                            // headerShown:false,
                            ...TransitionPresets.RevealFromBottomAndroid
                    }}
                />
                <Stack.Screen 
                    name={"Guests"}
                    component={GuestsScreen}
                    options={{
                        title: "How many people?"
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Router;