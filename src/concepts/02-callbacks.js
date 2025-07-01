import { heroes } from "../data/heroes"

/**
 * 
 * @param {HTMLDivElement} element
 */
export const callbacksComponent = (element) =>{
    //console.log('callbacksComponent');
    //id Hulk
    const id = '5d86371f2343e37870b91ef1'
    //al escribir la función y poner los parentesis te dirá que tipo de dato espéra
    //si no pones el segundo valor, se toma como undefined
    //pon el cursor encima del hero para que veas que reconoce la documentacion
    findHero(id,(error,hero)=>{
        
        //Evaluando el error
        if (error) {
            //si el error existe, lo muestra
            element.innerHTML=error
            return
        }

        //El signo de interrogación es para un if
        element.innerHTML = hero?.name || "no hay heroe";
        
    });
}


/**
 * esto es una firma, cuando mandes a llamar la función te dirá que tipo de dato espera tu codigo(documentacion)
 * @param {String} id 
 * //Modificando la firma
 * param {Function} callback 
 * va a recibir un hero de tipo objeto y va a regresar algo vacio
 * también en la documentación puedes poner " error?: String "
 * @param { (error: String|null,hero: Object) => void}   callback
*/ 


//recorre el arreglo de heroes 
const findHero = (id, callback) =>{
//EL ID QUE RECIBE COMO ARGUMENTO
    const hero = heroes.find(hero => hero.id === id);

    if (!hero) {
        //este callback no detiene la ejecución de la función 
        callback(`Hero with id ${id} not found.`)
        //el return es para que se salga de la ejecución y ya no siga ejecutabdo nada más
        return;
        //el return lo ponemos abajo porque no queremos que nos regrese un valor
    }
    //en el callback, el primer elemento debe de ser el error y el segundo el
    callback(null,hero)
}