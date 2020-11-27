import React from 'react';
import { StyleSheet, Text, View, NativeModules, Platform} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function TopBar({title}) {


	return (
	<View style={styles.container}>
		<Text style={styles.text}>{title}</Text>
	</View>
	);
}

const styles = StyleSheet.create({
	container: {
		//position: "absolute",	
		top: 0,	
		width: "100%",
		height: 56 + ((Platform.OS === 'ios') ? 20 : NativeModules.StatusBarManager.HEIGHT),
		backgroundColor: "#00B84D"
	},
	text:{
		position: "absolute",
		fontWeight: "500",
		bottom: 20,
		fontSize: 20,
		marginLeft: 24
	},
	icon: {

	}
});