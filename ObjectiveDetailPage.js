import React, { useContext, useEffect, useState } from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { DataContext } from './DataContext';

import FloatingButton from "./components/floatingButton";
import TopBar from "./components/topBar";
import KeyResultsList from "./components/keyResultsList";
import ProgressCircle from "./components/progressCircle";
import { v4 as uuidv4 } from 'uuid';

export default function ObjectiveDetailPage({ navigation, route }) {
    const { data, dispatchDataChange } = useContext(DataContext);
    const [objective, setObjective] = useState(route.params.objective);

    function findObjective(id) {
        return data.objectives.find(item => item.id === id);
    }

    useEffect(() => {
        setObjective(findObjective(route.params.objective.id));
    }, [data]);

    function addKr() {
        dispatchDataChange({ type: "addKeyResult", objectiveId: objective.id, kr: { id: uuidv4(), name: "Untitled", target: 0, counter: 0, completion: 0 } })
    }

    return (
        <SafeAreaView style={styles.container}>
			<ScrollView style={styles.scroll}>
				<View style={{alignItems:"center", width:"100%"}}>
					<Text style={styles.name}>{objective.name}</Text>
					<ProgressCircle outerRadius="90" thickness="24" completion={objective.completion} backgroundColor="#666" color="#00B84D" style={styles.completion} />
				</View>
				<KeyResultsList objective={objective} />
			</ScrollView>
			<FloatingButton onPress={addKr} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        //justifyContent: 'center',
        alignItems: "center"
	},
	scroll : {
		flex: 1,
		width: "100%"
	},
    name: {
        marginTop: 30,
        marginBottom: 20,
        color: "#ddd",
        fontSize: 40
    },
    completion: {
    },
    list: {

    }

});