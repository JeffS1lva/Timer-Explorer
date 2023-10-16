import { controls } from "./elements.js";
import * as actions from './actions.js'
import * as el from './elements.js'
import { updateDisplay } from "./timer.js";
import state from "./state.js";

// Está criando os eventos dos botoes
export function registerControls() {
  controls.addEventListener("click", function (event) {
    const action = event.target.dataset.action

    if (typeof actions[action] != 'function' ) {
      return
    }
    

    actions[action]()
  })
}

export function setMinutes() {
  el.minutes.addEventListener('focus', function(){
    el.minutes.textContent = ''
  })

  // Este comando faz com que a entrada de caracteres seja apenas números.
  el.minutes.onkeypress = (event) => /\d/.test(event.key)

  el.minutes.addEventListener('blur', function (event){
    let time = event.currentTarget.textContent
    time = time > 60 ? 60 : time


    state.minutes = time
    state.seconds = 0

    updateDisplay()
    el.minutes.removeAttribute('contenteditable')
  })
}
