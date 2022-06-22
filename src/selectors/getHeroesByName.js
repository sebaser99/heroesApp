import { heroes } from "../data/heroes"


export const getHeroesByName = (hero) => {
    if(hero.length === 0){
        return [];
    }else {
        hero = hero.toLowerCase()
        return heroes.filter(heros => heros.superhero.toLowerCase().includes(hero))

    }
}
