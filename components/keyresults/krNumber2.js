import React, { useContext, useEffect, useReducer, useState } from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Button, TextInput } from 'react-native';
import ProgressCircle from "../progressCircle"

import { NumericInput } from "react-numeric-input"
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { RectButton } from 'react-native-gesture-handler';
import { DataContext } from '../../DataContext';

function targetReducer(state, action) {
	let { target, counter } = state;

	switch (action.type) {
		case '+target':
			target += 1
			break
		case '-target':
			if (target > 1) target -= 1
			break
		case '+counter':
			if (counter < target) counter += 1
			break
		case '-counter':
			if (counter >= 1) counter -= 1
			break
	}

	if (counter > target) counter = target;
	return { target, counter, completion: counter / target * 100 };
}
export default function KrNumber2({ kr, objective }) {

	const [isEditing, setIsEditing] = useState(false);
	const [name, setName] = useState(kr.name);
	const [tcc, dispatchTcc] = useReducer(targetReducer, { target: kr.target, counter: kr.counter, completion: kr.completion });
	const { dispatchDataChange } = useContext(DataContext);


	useEffect(() => {
		if (tcc.target === 0 && !isEditing) setIsEditing(true);
	}, []);

	useEffect(() => {

		dispatchDataChange({
			type: "updateKeyResult", objectiveId: objective.id,
			kr: {
				id: kr.id,
				name: name,
				target: tcc.target,
				completion: tcc.completion,
				counter: tcc.counter
			}
		});
	}, [tcc, name]);


	const enterEdit = () => {
		setIsEditing(true);
	};

	const saveEdit = () => {

		if (tcc.target > 0 && name != "") {
			setIsEditing(false);
		}
	};

	const updateCounter = (op) => {
		if (op === '+') {
			dispatchTcc({ type: '+counter' })
		} else {
			dispatchTcc({ type: '-counter' });
		}
	}

	const requestDelete = () => {
		dispatchDataChange({ type: "deleteKeyResult", objectiveId: objective.id, krId: kr.id });
	}


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




	return (
		<Swipeable renderLeftActions={renderLeftActions}>
			<View style={styles.container}>
				<ProgressCircle outerRadius="24" thickness="6" completion={tcc.completion} backgroundColor="#666" color="#00B84D" style={styles.completion} />
				<View>
					{isEditing ?
						<View>

							<TextInput
								style={styles.input}
								defaultValue={kr.name}
								onChangeText={(name) => setName(name)} />
							<Text style={styles.editTxt}>
								(Edit Mode)
								</Text>
						</View>
						:
						<Text style={styles.name}>{kr.name}</Text>

					}
					<View style={{ flexDirection: 'row', marginLeft: 24 }}>
						{
							isEditing ?
								<Button title=" - " style={styles.btn} onPress={() => dispatchTcc({ type: '-target' })} color="#00B84D"/>
								:
								<Button title=" - " style={styles.btn} onPress={() => updateCounter('-')} color="#00B84D"/>

						}
						{
							isEditing ?
								<Text style={styles.value}>{tcc.target}</Text>
								:
								<Text style={styles.value}>{tcc.counter}{`/${tcc.target}`}</Text>
						}
						{
							isEditing ?
								<Button title=" + " style={styles.btn} onPress={() => dispatchTcc({ type: '+target' })} color="#00B84D"/>
								:
								<Button title=" + " style={styles.btn} onPress={() => updateCounter('+')} color="#00B84D"/>

						}
						<View style={{width:10}}></View>
						{
							isEditing ?
								<Button title="Save" onPress={saveEdit} color="#00B84D"/>
								:
								<Button title="Edit" onPress={enterEdit} color="#00B84D"/>
						}

					</View>
				</View>
			</View>
		</Swipeable>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: 120,
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
	},
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
	editTxt:{
		color: "#aaa",
		marginLeft: 24,

	},
	input : {
		marginTop:4,
		marginLeft: 24,
		width:80,
		height: 40, 
		backgroundColor: '#666', 
		width: "80%",
		borderRadius: 4,
		padding: 4
	},
});