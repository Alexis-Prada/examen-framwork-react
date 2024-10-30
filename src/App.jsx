import 'leaflet/dist/leaflet.css';
import './App.css'
import MapLeaflet from './components/Map/MapLeaflet'
import BottomOverlay from './components/overlays/BottomOverlay/BottomOverlay'
import SearchBar from './components/SearchBar/SearchBar'
import { useState } from 'react';

function App() {

  // Ici je dois récupèrer les informations de la ville cliqué en faisant passer la fonction handlecityclicked en props de searchbar
  // Ensuite je pourrai faire passer ses informations dans les props de mapleaflet
  const [positionCity, setPositionCity] = useState([46.232, 2.209])
  const [zoomAfter, setZoomAfter] = useState(6);
  const [overlayFormat, setOverlayFormat] = useState({
    variant: 'nul',
    data: '',
  })

  function handleCityClicked(city){
    setPositionCity([city.lat, city.lon]);
    setZoomAfter(12);
  }

  function handleOverlayFormat(mcdo){
    console.log('ok');
    setOverlayFormat({
      variant: 'full',
      data: mcdo.display_name,
    })
  }

  return (
    <>
      <SearchBar cityClicked={handleCityClicked}/>
      <MapLeaflet cityLatLon={positionCity} zoom={zoomAfter} handleOverlay={handleOverlayFormat}/>
      <BottomOverlay variant={overlayFormat.variant} data={overlayFormat.data}/>
    </>
  )
}

export default App
