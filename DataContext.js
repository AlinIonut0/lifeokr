import React, { createContext, useState, useEffect } from 'react';
import * as Backend from './backend';

export const DataContext = createContext();


export default ({ children }) => {
    const [objectives, setObjectives] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);


    async function saveData() {
        await Backend.saveData({ objectives });
    }
    useEffect(() => {

        async function loadData() {

            const data = await Backend.loadData();
            if (data.objectives) {
<<<<<<< HEAD
                setObjectives(data.objectives || []);
			}
			else setObjectives([]);
=======
                setObjectives(data.objectives);
            } else {
                setObjectives([]);
            }
>>>>>>> be9ea03c3ed5fc24f65b5bee2a98ba1b2197aeef
            setIsLoaded(true);
        }

        loadData();

    }, []);

    useEffect(() => {
        if (objectives) saveData();
    }, [objectives]);



    return (
        <>
            {!isLoaded ? null :
                <DataContext.Provider value={{ objectives, setObjectives }}>
                    {children}
                </DataContext.Provider>}
        </>
    )
}