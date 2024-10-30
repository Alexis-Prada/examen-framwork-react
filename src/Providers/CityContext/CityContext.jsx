import React, { createContext, useContext, useEffect, useState } from 'react';

export const CityContext = createContext();

export function CityProvider({ children }) {

    const [cityName, setCityName] = useState('');
    const [allMcDo, setAllMcDo] = useState([]);

    useEffect(()=>{
        if(cityName.length > 0){
            fetch(`https://nominatim.openstreetmap.org/search?format=json&q=McDonald's ${cityName}&countrycodes=FR&addressdetails=1`)
                .then(rep=>{
                    return rep.json()
                })
                .then(data=>{
                    console.log(data)
                    setAllMcDo(data);
                })
        }
    }, [cityName])

    return (
        <CityContext.Provider value={{ setCityName, allMcDo }}>
            { children }
        </CityContext.Provider>
    );
}