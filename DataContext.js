import React, { createContext, useState, useEffect, useReducer } from 'react';
import * as Backend from './backend';

export const DataContext = createContext();


function objectivesReducer(state, action) {

    let { objectives } = state;
    let objIndex, krIndex;

    const calcObjectiveCompletion = (objective) => {
        return objective.krs.reduce((sum, item) => sum + item.completion, 0) / objective.krs.length;
    };

    switch (action.type) {
        case "setObjectives":
            return { ...state, objectives: action.objectives };
        case "addObjective":
            objectives.push(action.objective);
            return { ...state, objectives };
        case "deleteObjective":
            objectives = objectives.filter(item => item.id !== action.objectiveId);
            return { ...state, objectives };
        case "addKeyResult":
            objIndex = objectives.findIndex(item => item.id === action.objectiveId);
            if (objIndex !== -1) {
                objectives[objIndex].krs.push(action.kr);
                objectives[objIndex].completion = calcObjectiveCompletion(objectives[objIndex]);
            } else console.log("FUCK");
            return { ...state, objectives };
        case "deleteKeyResult":
            objIndex = objectives.findIndex(item => item.id === action.objectiveId);
            if (objIndex !== -1) {
                objectives[objIndex].krs = objectives[objIndex].krs.filter(item => item.id !== action.krId);
                objectives[objIndex].completion = calcObjectiveCompletion(objectives[objIndex]);
            } else console.log("FUCK");
            return { ...state, objectives };
        case "updateKeyResult":
            objIndex = objectives.findIndex(item => item.id === action.objectiveId);
            if (objIndex !== -1) {
                krIndex = objectives[objIndex].krs.findIndex(item => item.id === action.kr.id);
                objectives[objIndex].krs[krIndex] = action.kr;
                objectives[objIndex].completion = calcObjectiveCompletion(objectives[objIndex]);
            } else console.log("FUCK");
            return { ...state, objectives };
    }
}

export default ({ children }) => {
    const [data, dispatchDataChange] = useReducer(objectivesReducer, { objectives: [] });
    const [isLoaded, setIsLoaded] = useState(false);


    async function saveData() {
        await Backend.saveData(data);

    }
    useEffect(() => {

        async function loadData() {

            const dt = await Backend.loadData();
            if (dt && dt.objectives) {
                dispatchDataChange({ type: "setObjectives", objectives: dt.objectives });
            } else {
                dispatchDataChange({ type: "setObjectives", objectives: [] });
            }
            setIsLoaded(true);
        }

        loadData();

    }, []);

    useEffect(() => {
        if (isLoaded) saveData();
    }, [data]);



    return (
        <>
            {!isLoaded ? null :
                <DataContext.Provider value={{ data, dispatchDataChange }}>
                    {children}
                </DataContext.Provider>}
        </>
    )
}