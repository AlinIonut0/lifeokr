import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, } from 'react-native';
import FloatingButton from "./floatingButton";
import TopBar from "./topBar";
import * as Backend from './backend';


export default function App() {

	const [counter, setCounter] = useState(0);

	async function loadData() {
		const data = await Backend.loadData();
		setCounter(data.counter || 0);
	}


	useEffect(() => {
		loadData();
	}, []);

	useEffect(() => {
		if (counter) Backend.saveData({ counter });
	}, [counter]);


	function addCounter() {
		setCounter(counter + 1);
	}


	return (
		<SafeAreaView style={styles.container}>
			<TopBar title="test" />
			<FloatingButton style={styles.addBtn} onPress={addCounter} />
			<Text style={styles.txt}>{counter}</Text>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#222',
		justifyContent: 'center',
		alignItems: "center"
	},
	objectiveList: {
		flex: 1,
		backgroundColor: '#ff1',
	},
	addBtn: {
		//position: "absolute",
		//bottom: 0
	},
	txt: {
		color: "#fff",
		fontSize: 18
	}

});
