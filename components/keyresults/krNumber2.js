import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Button, } from 'react-native';
import ProgressCircle from "../progressCircle"

export default function KrNumber2({ id, name, target, value }) {


	return (
	<TouchableHighlight onPress={() => df(id)}>
		<View style={styles.container}>
			<ProgressCircle outerRadius="24" thickness="6" completion={value / target * 100} backgroundColor="#666" color="#00B84D" style={styles.completion}/>
		</View>
	</TouchableHighlight>);
};

const styles = StyleSheet.create({
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
	},
	button: {

	}
});