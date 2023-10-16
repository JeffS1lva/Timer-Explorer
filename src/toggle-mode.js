let darkMode = true
const buttonToggle = document.getElementById("toggle-mode")

buttonToggle.addEventListener("click", handleClickMode)

function handleClickMode(event){
  document.documentElement.classList.toggle('light')

  let mode = darkMode ? 'light' : 'dark'
  event.currentTarget.querySelector('span').textContent = `${mode} foi ativado`

  darkMode = !darkMode
}
