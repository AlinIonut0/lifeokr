import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createStackNavigator} from '@react-navigation/stack';

import ObjectivesListScreen from "./screens/ObjectivesListScreen";
import ObjectivesDetailsScreen from "./screens/ObjectiveDetailsScreen";


const Stack = createStackNavigator();

export default function App() {

	return (
	<NavigationContainer>
		<Stack.Navigator initialRouteName="Home">
			<Stack.Screen name="ObjectivesList" component={ObjectivesListScreen} />
			<Stack.Screen name="ObjectiveDetails" component={ObjectivesDetailsScreen} />
		</Stack.Navigator>
	</NavigationContainer>
	);

};
