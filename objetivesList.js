import React from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import TopBar from "./topBar";
import ProgressCircle from "./progressCircle"




function Objective({ name, completion }) {
	return (
	<View style={Objectivestyles.container}>
	  <ProgressCircle outerRadius="24" thickness="6" completion={completion} backgroundColor="#666" color="#00B84D" style={Objectivestyles.completion}/>
	  <Text style={Objectivestyles.name}>{name}</Text>
	</View>);
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

export default function ObjectivesList({data}) {



	const renderItem = ({item}) => (
		<Objective name={item.name} completion={item.completion}/>
	);
	
	return (
	<View style={Liststyles.container}>
		<FlatList
		data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
		 />

	</View>
	);
}

const Liststyles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
		paddingBottom: 0,
		width: "100%",
	},

});