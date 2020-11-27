import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, } from 'react-native';
import FloatingButton from "./floatingButton";
import TopBar from "./topBar";
import * as Backend from './backend';
import ObjectivesList from "./objectivesList";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AddObjectivePage from './addObjective';
import DataProvider, { DataContext } from './DataContext';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import ObjectivesListScreen from "./screens/ObjectivesListScreen";
import ObjectivesDetailsScreen from "./screens/ObjectiveDetailsScreen";

function ObjectivesPage({ navigation }) {


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
