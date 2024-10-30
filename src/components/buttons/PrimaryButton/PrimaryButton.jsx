import './PrimaryButton.css';

export default function PrimaryButton({ variant, children }){

    if(variant === "search"){
        return (
            <button className='primary-button button-search flex space-center align-center'>
                <img className='responsive' src="img/search.png" alt="image d'une loupe" />
            </button>
        )
    }else{
        return (
            <button className='primary-button'>{children}</button>
        )
    }
}