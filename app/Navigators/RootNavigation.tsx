import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import List from '../Screen/List/List';
import Detail from '../Screen/Detail/Detail';

type RootStackParamList = {
    list: undefined
    detail: {item: object}
}

const RootStack = createStackNavigator<RootStackParamList>();

export default function RootNavigation() {
    return (
        <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Screen name="list" component={List} />
                <RootStack.Screen name="detail" component={Detail} />
            </RootStack.Navigator>
        </NavigationContainer>
    );
}

