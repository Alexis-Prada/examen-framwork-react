import PrimaryButton from "../../buttons/PrimaryButton/PrimaryButton";
import "./BottomOverlay.css";

export default function BottomOverlay({variant, data}){

    if(variant === "nul"){
        return (
            <div className="overlay flex align-center responsive">
                <h3>Aucun restaurant séléctionné</h3>
            </div>
        )
    }else if(variant === "full"){
        return (
            <div className="overlay overlay-variant flex align-center responsive">
                <h3>Restaurant séléctionné</h3>
                <p>{data}</p>
                <PrimaryButton>Continuer</PrimaryButton>
            </div>
        )
    }
}