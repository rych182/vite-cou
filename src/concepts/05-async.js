import { heroes } from "../data/heroes";

/**
 * 
 * @param {HTMLDivElement} element
 */
export const asyncComponent = (element) =>{
    //console.log('async component');
    const id1 = '5d86371f97c29d020f1e1f6d'
    findHero(id1)
        .then( (name)=> element.innerHTML = name  ) 
}

/**
 * 
 * @param {String} id
 */

//Al ponerle la palabra "async" se convierte en una promera
const findHero = async (id) =>{
    const hero = heroes.find(hero=> hero.id === id)
    return hero.name
    //puedes destructurar el objeto así
    //return hero
    //y en el .then({name}) => element.innerHTML = name, así lo desectructuras 
}

/**
 Es como si yo escribiera
const findHeroPromise = () => new Promise((resolve, reject) => {
    const hero = heroes.find(hero=> hero.id === id)
    resolve(hero)
})

 */

