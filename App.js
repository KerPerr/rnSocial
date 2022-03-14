import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Layout } from './components/Views/Pokemons/Layout'
import { Detail } from './components/Views/Pokemons/Detail'
import { Login } from './components/Authentication/Login';
import { Base } from './components/Views/Base';

const Stack = createNativeStackNavigator();

export default function App() {

	const [me, setMe] = React.useState({})

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Login">
				<Stack.Screen name="Login">{props => <Login {...props} setMe={setMe} />}</Stack.Screen>
				<Stack.Screen name="Base" options={{ headerShown: false }}>{props => <Base {...props} me={me} />}</Stack.Screen>
				<Stack.Screen name="Layout" options={{ headerShown: false }}>{props => <Layout {...props} me={me} />}</Stack.Screen>
				<Stack.Screen name="Detail" component={Detail} options={({ route }) => ({
					title: route.params.item.name[0].toUpperCase() + route.params.item.name.substring(1),
					headerTitleStyle: {
						fontWeight: 'bold',
					}
				})} />
			</Stack.Navigator>
		</NavigationContainer>
	)
}