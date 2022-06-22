import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm/useForm"
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "../hero/HeroCard";
import queryString from 'query-string'
import { useMemo } from "react";

export const SearchScreen = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const {q = ''} = queryString.parse(location.search)

    const [formValue, handleChangeInput ] = useForm({
        searchText: q
    }) 
    
    const {searchText} = formValue;

    const handleSubmit = (e)=>{
        e.preventDefault()
        navigate(`?q=${searchText}`)
    }

    const filteredHeroes = useMemo(()=> getHeroesByName(q), [q]) 

    return (
        <div>
             <h1>Búsqueda</h1>
             <hr/>

             <div className="row">
                <div className="col-5">
                
                    <form onSubmit={handleSubmit}>
                        <input 
                            type="text"
                            placeholder="Busca tu heroe"
                            className="form-control"
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleChangeInput}
                        />
                        <button className="btn btn-outline-dark mt-2 btn-block" 
                                type='submit'>
                            Buscar ...
                        </button>
                    </form>
                </div>

                <div className="col-7" >

                    {
                        (q === '' ) 
                        ? <div className="alert alert-warning">Realiza una búsqueda</div>
                        : (filteredHeroes.length === 0 ) && <div className="alert alert-danger">No hay resultados {q}</div>
                    }
                   
                    {
                        filteredHeroes.map(hero =>(
                            <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        ))
                    }
                </div>

             </div>
        </div>
    )
}
