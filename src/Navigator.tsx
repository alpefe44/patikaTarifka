import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CategoryScreen from './Screens/CategoryScreen';
import DetailScreen from './Screens/DetailScreen';
import FoodDetailScreen from './Screens/FoodDetailScreen';



export type RootStackParams = {
    CategoryScreen: undefined
    DetailScreen: {
        name: string
    }
    FoodDetailScreen: {
        id: string
    }
}

const RootStack = createNativeStackNavigator<RootStackParams>();

const Navigator = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Screen name='CategoryScreen' component={CategoryScreen} options={{ headerShown: false }}></RootStack.Screen>
                <RootStack.Screen name='DetailScreen' component={DetailScreen} options={{headerTitleAlign : 'center' , headerTitleStyle : {color : 'orange'}}}></RootStack.Screen>
                <RootStack.Screen name='FoodDetailScreen' component={FoodDetailScreen}></RootStack.Screen>
            </RootStack.Navigator>
        </NavigationContainer>
    )

}

export default Navigator