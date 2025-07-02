import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element
 */
export const promiseComponent = (element) =>{
    const renderHero = (hero) =>{
        element.innerHTML = hero.name
    }

    const id1 = '5d86371f25a058e5b1c8a65e'

    findHero(id1)
        //PRO TIP
        //.then( superHeroe => renderHero(superHeroe))
        .then(renderHero)
    }


/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */

const findHero = (id) =>{

    return new Promise( (resolve,reject)=>{
    
        const hero = heroes.find(hero => hero.id === id)
    
        if (hero) {
            resolve(hero)
        }
        reject(`Hero with id ${id} not found`)
    });

}