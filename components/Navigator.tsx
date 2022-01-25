import React from 'react';
import {
    View,
    StyleSheet
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Intro } from './Intro';
import { Quiz } from './Quiz';
import { Results } from './Results';

const Stack: any = createNativeStackNavigator();

export const Navigator = () => {

    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Intro" component={Intro}/>
            <Stack.Screen name="Quiz" component={Quiz}/>
            <Stack.Screen name="Results" component={Results}/>
        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({

})