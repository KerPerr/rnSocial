import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Settings } from './Settings';
import { Home } from './Home';

const Tab = createBottomTabNavigator();

export const Layout = (props) => {

    const [setting, setSetting] = React.useState({offset: 0, limit: 151})

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
            <Tab.Screen name='Home'>{props => <Home {...props} setting={setting} setSetting={setSetting} />}</Tab.Screen>
            <Tab.Screen name='Settings'>{props => <Settings {...props} setSetting={setSetting} />}</Tab.Screen>
        </Tab.Navigator>
    );
}