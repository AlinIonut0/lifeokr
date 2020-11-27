import React, { createContext, useState, useEffect } from 'react';
import * as Backend from './backend';

export const DataContext = createContext();

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        name: 'First Item',
        completion: 56
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        name: 'Second Item',
        completion: 69

    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        name: 'Third Item',
        completion: 100
    },
    {
        id: '58594a0f-3da1-471f-bd96-145571e29d72',
        name: '4 Item',
        completion: 77
    }
];



export default ({ children }) => {
    const [objectives, setObjectives] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {

        async function loadData() {

            const data = await Backend.loadData();
            setObjectives(data.objectives);
            setIsLoaded(true);
        }

        loadData();

    }, []);

    return (
        <>
            {!isLoaded ? null :
                <DataContext.Provider value={{ objectives, setObjectives }}>
                    {children}
                </DataContext.Provider>}
        </>
    )
}