import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element
 */
export const promiseComponent = (element) =>{
    const renderHero = (hero) =>{
        element.innerHTML = hero.name
    }

    const renderError = (error) =>{
        element.innerHTML = `<h1>${error}</h1>`;
    }

    const renderTwoHeroes = (hero1,hero2) =>{
        element.innerHTML = `
            <h1>${hero1.name}</h1>
            <h1>${hero2.name}</h1>
        `;
    }

    const id1 = '5d86371f25a058e5b1c8a65e'
    const id2 = '5d86371f9f80b591f499df32'

    //Esto es lo más fácil de mantener y recomendable
    Promise.all([//con que 1 de error, se ejecuta el catch de todas
        findHero(id1),
        findHero(id2)
    ])
    .then(([hero1,hero2])=>renderTwoHeroes(hero1,hero2))
    .catch(renderError)
    /* regresa 1 heroe
    findHero(id1)
        //PRO TIP
        //.then( superHeroe => renderHero(superHeroe))
        .then(renderHero)
        .catch(error=>renderError(error))
    }

    ----------------
     //regresa 2 heroes
     //Usa esto si el resultado 2 depende de la 1er promesa
   let hero1;
   findHero(id1) 
    .then(hero =>{
        hero1 = hero;
        return findHero(id2)
    }).then(hero2 =>{
        renderTwoHeroes(hero1, hero2)
    }).catch(renderError);
    */

    
    
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
            return;
        }
        reject(`Hero with id ${id} not found`)
    });

}