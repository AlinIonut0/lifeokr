import React, { useContext } from 'react';
import { Button, Text, View } from 'react-native';
import { DataContext } from './DataContext';


export default function AddObjectivePage({ route, navigation }) {

    const { objectives, setObjectives } = useContext(DataContext);

    function btnPressed() {
        setObjectives(
            objectives.concat([
                {
                    id: Math.random().toString(),
                    name: "heeee",
                    completion: 50
                }
            ])
        )
        navigation.goBack();
    }
    return <View>
        <Button title={"Hey"} onPress={btnPressed}>Go back</Button>
    </View>
}