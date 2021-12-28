import { Link } from "react-router-dom"

export const HeroCard = ({
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
}) => {
    const imagePath = `/statics/images/${id}.jpg`
    return (
        <div className="col" >
            <div className="card" style={{height: 300}}>
                <div className="row no-gutters">
                <div className="col-4 ">
                    <img className="card-img-top" src={imagePath} alt={superhero} />
                </div>
                <div className="col-8">
                    <div className="card-body">
                        <h5 className="card-title">{superhero}</h5>
                        <p className="card-text">{alter_ego}</p>
                        {(alter_ego !== characters) && 
                            <p className="text-muted">{characters}</p>
                        }
                        <p className="card-text">
                            <small className="text-muted">{first_appearance}</small>
                        </p>
                        <Link to={`/hero/${id }`}>
                            Ver más ...
                        </Link>
                    </div>

                </div>
                </div>
                
            </div>
        </div>
    )
}
