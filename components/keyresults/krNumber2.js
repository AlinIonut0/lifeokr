import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Button, TextInput} from 'react-native';
import ProgressCircle from "../progressCircle"

import {NumericInput} from "react-numeric-input"

export default function KrNumber2({ id, name, target, value }) {


	return (
	<TouchableHighlight onPress={() => df(id)}>
		<View style={styles.container}>
			<ProgressCircle outerRadius="24" thickness="6" completion={value / target * 100} backgroundColor="#666" color="#00B84D" style={styles.completion}/>
			<View >
				<Text style={styles.name}>{name}</Text>
				<View style={{flexDirection: 'row', marginLeft: 24}}>
					<Button title=" - " style={styles.btn} />
					<Text style={styles.value}/>
					<Button title=" + " style={styles.btn} />
				</View>
			</View>
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
	btn: {
		height: 32,
		width: 80
	},
	value: {
		width: 40,
		backgroundColor: "#666",
		borderRadius: 4,
		color: "#fff",
		textAlign: "center",
		marginLeft: 8,
		marginRight: 8,
		padding: 4
	}
});