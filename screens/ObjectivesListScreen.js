import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, } from 'react-native';
import * as Backend from '../backend.js';


import FloatingButton from "../components/floatingButton";
import TopBar from "../components/topBar";
import ObjectivesList from "../components/objectivesList";


const DATA = [
	{
	  id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
	  name: 'First Item',
	  completion: 56
	},
	{
	  id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
	  name: 'Second Item',
	  completion: 69

	},
	{
	  id: '58694a0f-3da1-471f-bd96-145571e29d72',
	  name: 'Third Item',
	  completion: 100
	},
	{
		id: '58594a0f-3da1-471f-bd96-145571e29d72',
		name: '4 Item',
		completion: 77
	  }
  ];

export default function ObjectivesListScreen({navigation}) {

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

	function goToDetails(id)
	{
		navigation.navigate('ObjectiveDetails', id);
	}

	return (
		<SafeAreaView style={styles.container}>
			<ObjectivesList data={DATA} detailsFunction={goToDetails}></ObjectivesList>
			<FloatingButton onPress={addCounter} />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000',
		//justifyContent: 'center',
		//alignItems: "center"
	},
	txt: {
		color: "#fff",
		fontSize: 18
	}

});
