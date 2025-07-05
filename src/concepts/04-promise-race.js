/**
 * 
 * @param {HTMLDivElement} element
 */
export const promiseRaceComponent = (element) =>{
    element.innerHTML = "Loading...";
    //console.log('promiseRaceComponent');
    //cuando quiero el resultado de la promesa que se resuelve más rápido
    const renderValue = (value) => {
        element.innerHTML = value;
    }
    //renderValue("fulanito")
    Promise.race([
        slowPromise(),
        mediumPromise(),
        fastPromise(),
    ])//.then(value => renderValue(value))
    .then(renderValue)
}

//función flecha corta, que no rechaza nada, por eso solo se usa el resolve
const slowPromise = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve('Slow Promise')
    }, 2000);
})

const mediumPromise = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve('Medium Promise')
    }, 1500);
})

const fastPromise = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve('Fast Promise')
    }, 1000);
})