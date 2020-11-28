import React, { useContext, useState } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { DataContext } from './DataContext';
import { v4 as uuidv4 } from 'uuid';


export default function AddObjectivePage({ route, navigation }) {

    const { data, dispatchDataChange } = useContext(DataContext);
    const [name, setName] = useState("");


    function btnPressed() {
        dispatchDataChange({
            type: "addObjective",
            objective: {
                id: uuidv4(),
                name: name,
                completion: 0,
                krs: []
            }
        });

        navigation.goBack();
    }
    return <View style={styles.container}>
            <TextInput style={styles.input}
                onChangeText={name => setName(name)}
            />
        <Button title={"Add Objective"} onPress={btnPressed} color="#00B84D"></Button>
    </View>
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		//justifyContent: 'center',
		alignItems: "center",
		backgroundColor: "#000"
	},
	input : {
		marginTop: 24,
		height: 40, 
		backgroundColor: '#666', 
		width: "80%",
		borderRadius: 4,
		marginBottom: 24,
		padding: 4
	},
	button : {

	}
});