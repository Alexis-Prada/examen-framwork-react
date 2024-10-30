import React, { useContext, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import PrimaryButton from '../buttons/PrimaryButton/PrimaryButton';
import { CityContext } from '../../Providers/CityContext/CityContext';

export default function MapLeaflet({ cityLatLon, zoom, handleOverlay }) {
    console.log(cityLatLon)

    const {allMcDo} = useContext(CityContext);
    console.log(allMcDo)

    function MapUpdater({ center, zoom }) {
        const map = useMap();
    
        useEffect(() => {
            if(center){
                map.setView(center, zoom);
            }
        }, [center, zoom, map]);
    }

    return (
        <MapContainer
            center={cityLatLon}
            zoom={zoom}
            style={{ height: "100vh", width: "100%" }}
        >

        <TileLayer
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />

        <MapUpdater center={cityLatLon} zoom={zoom} />

        {allMcDo.map((mcdo, index) => (
            <Marker key={index} position={[mcdo.lat, mcdo.lon]}>
                <Popup>
                    <p>{mcdo.display_name}</p>
                    <PrimaryButton onClick={()=>handleOverlay(mcdo)}>choisir</PrimaryButton>
                    <button onClick={()=>handleOverlay(mcdo)}>2</button>
                </Popup>
            </Marker>
        ))}
        </MapContainer>
    );
}

