import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableWithoutFeedback } from 'react-native';
import TopBar from "./components/topBar";
import ProgressCircle from "./components/progressCircle"
import * as Backend from "./backend";
import FloatingButton from './components/floatingButton';
import { DataContext } from './DataContext';
import { TouchableOpacity } from 'react-native-gesture-handler';


function Objective({ item }) {
	return (
		<View style={Objectivestyles.container}>
			<ProgressCircle outerRadius="24" thickness="6" completion={item.completion} backgroundColor="#666" color="#00B84D" style={Objectivestyles.completion} />
			<Text style={Objectivestyles.name}>{item.name}</Text>
		</View >);
};

const Objectivestyles = StyleSheet.create({
	container: {
		flex: 1,
		height: 100,
		backgroundColor: "#191919",
		flexDirection: 'row',
		marginBottom: 16,
		alignItems: "center",
		paddingLeft: 12,
		borderRadius: 12
	},
	name: {
		fontWeight: "500",
		fontSize: 21,
		marginLeft: 24,
		color: "#ddd"
	},
	completion: {
	}
});

const ObjectivesList = (props) => {

	const { objectives, setObjectives } = useContext(DataContext);

	const openDetail = (item) => {
		props.navigation.navigate("ObjectiveDetail", { objective: item })
	};

	const renderItem = ({ item }) => {
		return (
			<TouchableOpacity activeOpacity={0.9} onPress={() => openDetail(item)}>
				<Objective item={item} />
			</TouchableOpacity >
		);
	};

	const devAdd = () => {
		props.navigation.push('AddObjective');

	};

	return (

		<View style={Liststyles.container}>
			<View style={Liststyles.container}>
				<FlatList
					style={Liststyles.flatList}
					data={objectives}
					renderItem={renderItem}
					keyExtractor={item => item.id}
				/>
			</View>
			<View>
				<FloatingButton onPress={devAdd} />
			</View>


		</View>
	);
}

const Liststyles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 8,
		paddingBottom: 0,
		width: "100%",
	},
	flatList: {
		flex: 1
	}

});

export default ObjectivesList;