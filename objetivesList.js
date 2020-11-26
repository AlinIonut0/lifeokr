import React from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import TopBar from "./topBar";




function Objective({ name, completion }) {
	return (
	<View style={Objectivestyles.container}>
	  <Text style={Objectivestyles.completion}>{(completion == 100) ? "Done  " : `${completion}  `}</Text><Text style={Objectivestyles.name}>{name}</Text>
	</View>);
};

const Objectivestyles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		backgroundColor: "#499",
		marginBottom: 10,
        flexDirection: 'row'
	},
	name: {
		fontSize: 16
	},
	completion: {
		fontSize: 16
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
		backgroundColor: "#999",
		width: "100%",
	},

});