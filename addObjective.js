import React, { useContext, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { DataContext } from './DataContext';
import { v4 as uuidv4 } from 'uuid';


export default function AddObjectivePage({ route, navigation }) {

    const { objectives, setObjectives } = useContext(DataContext);
    const [name, setName] = useState("");


    function btnPressed() {
        setObjectives(
            objectives.concat([
                {
                    id: uuidv4(),
                    name: name,
                    completion: 0
                }
            ])
        )
        navigation.goBack();
    }
    return <View>
        <View>
            <TextInput
                style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                onChangeText={name => setName(name)}
            />
        </View>
        <Button title={"Add Objective"} onPress={btnPressed}></Button>
    </View>
}