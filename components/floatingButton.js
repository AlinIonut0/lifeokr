import React from "react";
import { View, Text, StyleSheet, Animated, TouchableWithoutFeedback } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function FloatingButton(props) {
	return (
		<TouchableWithoutFeedback onPress={props.onPress}>
			<Animated.View style={styles.button}>
				<AntDesign name="plus" size={24} color="#000" />
			</Animated.View>
		</TouchableWithoutFeedback>
	);

}

const styles = StyleSheet.create({
	container: {
		position: "absolute"
	},
	button: {
		backgroundColor: "#00B84D",
		width: 60,
		height: 60,
		borderRadius: 60 / 2,
		alignItems: "center",
		justifyContent: "center",
		shadowRadius: 10,
		shadowColor: "#00B84D",
		shadowOpacity: 0.3,
		position: 'absolute',
		bottom: 30,
		right: 30
	}
});

//export default FloatingButton;