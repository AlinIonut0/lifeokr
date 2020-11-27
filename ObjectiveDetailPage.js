import React, { useContext, useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { DataContext } from './DataContext';

import FloatingButton from "./components/floatingButton";
import TopBar from "./components/topBar";
import KeyResultsList from "./components/keyResultsList";
import ProgressCircle from "./components/progressCircle";

export default function ObjectiveDetailPage({ navigation, route }) {
    const { objectives, setObjectives } = useContext(DataContext);
    const [objective, setObjective] = useState(route.params.objective);

    return (
        <View style={styles.container}>
            <Text style={styles.name}>{objective.name}</Text>
            <ProgressCircle outerRadius="90" thickness="24" completion={objective.completion} backgroundColor="#666" color="#00B84D" style={styles.completion} />
            <KeyResultsList objective={objective} />
            <FloatingButton />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        //justifyContent: 'center',
        alignItems: "center"
    },
    name: {
        marginTop: 64,
        marginBottom: 30,
        color: "#ddd",
        fontSize: 40
    },
    completion: {
    },
    list: {

    }

});