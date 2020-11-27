import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, } from 'react-native';
import TopBar from "./components/topBar";
import * as Backend from './backend';
import ObjectivesList from "./objectivesList";
import { createStackNavigator } from '@react-navigation/stack';
import AddObjectivePage from './addObjective';
import DataProvider, { DataContext } from './DataContext';

import ObjectivesListScreen from "./screens/ObjectivesListScreen";
import ObjectivesDetailsScreen from "./screens/ObjectiveDetailsScreen";
import { NavigationContainer } from '@react-navigation/native';

function ObjectivesPage({ navigation }) {

	const styles = StyleSheet.create({
		container: {
			flex: 1,
			//justifyContent: 'center',
			//alignItems: "center"
		}

	});

	return (
		<SafeAreaView style={styles.container}>
			<ObjectivesList navigation={navigation}></ObjectivesList>
		</SafeAreaView>
	);

}

const Stack = createStackNavigator();

export default function App() {

	return (
		<DataProvider>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Objectives">
					<Stack.Screen name="Objectives" component={ObjectivesPage} />
					<Stack.Screen name="AddObjective" component={AddObjectivePage} />
				</Stack.Navigator>
			</NavigationContainer>
		</DataProvider>

	);

};
