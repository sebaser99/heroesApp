import { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";


export const Hero = () => {
    const {heroId} = useParams()
    const hero = useMemo(()=> getHeroById(heroId), [heroId]); 
    const navigate = useNavigate()
    
    if(!hero){
        return <Navigate to='/' />
    }
    const {id, superhero, characters, alter_ego, publisher, first_appearance } = hero;

    const handleClick = ()=>{
        // if(publisher === 'DC Comics'){
        //     navigate('/dc')
        // }else{
        //     navigate('/marvel')
        // }
        navigate(-1)
    }

    const imagePath = `/statics/images/${id}.jpg`
    return (
        <div className="row mt-5">
            <div className="col-4">
                <img 
                    src={imagePath}
                    alt={superhero}
                    className="img-thumbnail animate__animated animate__bounceInLeft"
                />
            </div>
            <div className="col-8 animate__animated animate__fadeIn">
                <h3>{superhero}</h3>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item"><b>Alter Ego:</b> {alter_ego}</li>
                    <li className="list-group-item"><b>Publisher:</b> {publisher}</li>
                    <li className="list-group-item"><b>First Appearance:</b> {first_appearance}</li>
                </ul>

                <h5 className="mt-5">Characters</h5>
                <p>{characters}</p>

                <button
                    className="btn btn-outline-info"
                    onClick={handleClick}
                >Regresar</button>

            </div>
            
        </div>
    )
}
