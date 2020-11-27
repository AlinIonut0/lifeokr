import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableHighlight, Button} from 'react-native';
import TopBar from "./topBar";
import ProgressCircle from "./progressCircle";

import KrNumber2 from "./keyresults/krNumber2";

export default function KeyResultsList({data}) {

	const renderItem = ({item}) => (
		<KrNumber2 id={item.id} name={item.name} value={item.completion} target={100}/>
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