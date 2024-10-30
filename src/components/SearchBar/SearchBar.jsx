
import { useContext, useState } from "react"
import PrimaryButton from "../buttons/PrimaryButton/PrimaryButton"
import "./SearchBar.css"
import { CityContext } from "../../Providers/CityContext/CityContext";

export default function SearchBar({ cityClicked }){

    const [inputValue, setInputValue] = useState('');
    const [resultSearch, setResultSearch] = useState([]);
    const [message, setMessage] = useState('');
    const {setCityName} = useContext(CityContext);

    // fonction qui permet de verifier si le nom rentrer dans l'inout correspond bien à la bonne ville (en france) recu dans les datas
    function verifNom(data){
        if(data.length > 0){
            console.log(data);
            setResultSearch(data);
            setMessage('');
        }else{
            setResultSearch([])
            setMessage(`Ville non trouvée, veuillez réessayer.`)
        }
    }

    // Fonction qui au clique de la recherche appelle l'api avec en parametre la valeur de l'input
    function handleSearch(e){
        e.preventDefault();

        fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${inputValue}&countrycodes=FR&addressdetails=1&limit=1`)
            .then(rep=>{
                return rep.json()
            })
            .then(data=>{
                
                verifNom(data)
            })
    }

    // Fonction qui au click d'une ville récupère ses informations pour les faires passer dans les props
    function handleCity(city){
        setInputValue('');
        setResultSearch([])
        cityClicked(city)
        setCityName(city.name);
    }

    return (
        <div className="search-bar-container">
            <p>Rechercher un restaurant</p>
            <form action="" onSubmit={handleSearch}>
                <div className="flex align-center space-between">
                    <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
                    <PrimaryButton type="submit" variant={"search"}/>
                </div>
            </form>
            <div className="flex">
                <p>{message}</p>
                {resultSearch.map((result)=>{
                    return (
                        <div key={result.place_id} className="search-bar-item" onClick={() => handleCity(result)}>
                            <p>{result.display_name}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}