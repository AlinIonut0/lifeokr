import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, } from 'react-native';
import * as Backend from '../backend.js';


import FloatingButton from "../components/floatingButton";
import TopBar from "../components/topBar";
import KeyResultsList from "../components/keyResultsList";
import ProgressCircle from "../components/progressCircle";

export default function ObjectivesListScreen({ route, navigation }) {

	const { objectives, setObjectives } = useContext(DataContext);
    const [objective, setObjective] = useState(route.params.objective);

	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.name}>{objective.name}</Text>
			<ProgressCircle outerRadius="90" thickness="24" completion={objective.completion} backgroundColor="#666" color="#00B84D" style={styles.completion} />
			<FloatingButton />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000',
		//justifyContent: 'center',
		alignItems: "center"
	},
	name: {
		marginTop: 64,
		marginBottom: 30,
		color: "#ddd",
		fontSize: 40
	},
	completion: {
	},
	list: {

	}

});
