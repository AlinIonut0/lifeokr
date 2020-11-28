import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, } from 'react-native';
import TopBar from "./components/topBar";
import * as Backend from './backend';
import ObjectivesList from "./objectivesList";
import ObjectiveDetailPage from "./ObjectiveDetailPage";
import { createStackNavigator } from '@react-navigation/stack';
import AddObjectivePage from './addObjective';
import DataProvider, { DataContext } from './DataContext';

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
					<Stack.Screen name="Objectives" component={ObjectivesPage}  options={{headerStyle:{backgroundColor: "#00B84D"}}}/>
					<Stack.Screen name="AddObjective" component={AddObjectivePage}  options={{headerStyle:{backgroundColor: "#00B84D"}}}/>
					<Stack.Screen name="ObjectiveDetail" component={ObjectiveDetailPage}  options={{headerStyle:{backgroundColor: "#00B84D"}}}/>
				</Stack.Navigator>
			</NavigationContainer>
		</DataProvider>

	);

};
