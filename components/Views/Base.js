import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Network } from './Network';
import { Shared } from './Shared';
import { Wall } from './Wall'

const Tab = createBottomTabNavigator();

export const Base = (props) => {

    const { me } = props

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName = (route.name).toLowerCase();
                    return <MaterialIcons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#006989',
                tabBarInactiveTintColor: '#BBBBBB',
            })}>
            <Tab.Screen name='Dashboard'>{props => <Wall {...props} me={me} />}</Tab.Screen>
            <Tab.Screen name='People' component={Network} />
            <Tab.Screen name='Notifications' component={Shared} />
        </Tab.Navigator>
    );
}