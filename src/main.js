import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { callbacksComponent } from './concepts/02-callbacks'
import { promiseComponent } from './concepts/03-promises'
import { promiseRaceComponent } from './concepts/04-promise-race'
import { asyncComponent } from './concepts/05-async'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      
    </div>
  </div>
`

const element = document.querySelector('.card');

//enviromentComponent(element)
//console.log("HOla mundo")
//callbacksComponent(element)
//promiseComponent(element)
//promiseRaceComponent(element)
asyncComponent(element)