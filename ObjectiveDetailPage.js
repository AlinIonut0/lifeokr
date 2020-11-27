import React, { useContext, useState } from 'react';
import { Text, View } from 'react-native';
import { DataContext } from './DataContext';

export default function ObjectiveDetailPage({ navigation, route }) {
    const { objectives, setObjectives } = useContext(DataContext);
    const [objective, setObjective] = useState(route.params.objective);

    return (
        <View>
            <Text>{objective.name}</Text>
            <Text>{objective.completion}</Text>
        </View>
    )
}