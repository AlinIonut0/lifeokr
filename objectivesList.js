import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import ProgressCircle from "./components/progressCircle"
import FloatingButton from './components/floatingButton';
import { DataContext } from './DataContext';
import { RectButton } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Animated from 'react-native-reanimated';


function Objective({ item, requestDelete, openDetail }) {
	const renderLeftActions = (progress, dragX) => {
		const trans = dragX.interpolate({
			inputRange: [0, 50, 100, 101],
			outputRange: [-20, 0, 0, 1],
		});

		return (
			<RectButton style={styles.leftAction} onPress={() => requestDelete()}>
				<Text>
					Confirm Delete
				</Text>
			</RectButton >
		);
	};

	const styles = StyleSheet.create({
		leftAction: {
			flex: 1,
			backgroundColor: 'red',
			justifyContent: 'center',
			paddingLeft: 12,
			borderRadius: 12,
			marginBottom: 16,
		},
		actionText: {
			color: 'white',
			fontSize: 16,
			backgroundColor: 'transparent',
			padding: 10,
		},
		rightAction: {
			alignItems: 'center',
			flex: 1,
			justifyContent: 'center',
		},
	});
	return (
		<Swipeable renderLeftActions={renderLeftActions}>
			<TouchableOpacity activeOpacity={0.9} onPress={() => openDetail()}>
				<View style={Objectivestyles.container}>
					<ProgressCircle outerRadius="24" thickness="6" completion={item.completion} backgroundColor="#666" color="#00B84D" style={Objectivestyles.completion} />
					<Text style={Objectivestyles.name}>{item.name}</Text>
				</View ></TouchableOpacity>
		</Swipeable>
	);
};

const Objectivestyles = StyleSheet.create({
	container: {
		flex: 1,
		height: 100,
		backgroundColor: "#212121",
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

	const { data, dispatchDataChange } = useContext(DataContext);

	const openDetail = (item) => {
		props.navigation.navigate("ObjectiveDetail", { objective: item })
	};

	const requestDel = (item) => {
		dispatchDataChange({ type: "deleteObjective", objectiveId: item.id });
	}

	const renderItem = ({ item }) => {
		return (
			<Objective item={item} requestDelete={() => requestDel(item)} openDetail={() => openDetail(item)} />
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
					data={data.objectives}
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
		backgroundColor: "#000"
	},
	flatList: {
		flex: 1,
		width: "100%"
	}

});

export default ObjectivesList;