import {
  selectTheme,
  themeLight,
  themeDark,
  selectThemeConteiner,
  buttonPlay,
  buttonPause,
  buttonStop,
  minutesDisplay,
  secondsDiplay } 
  from './elementes.js'


selectTheme.addEventListener('click', function() {
  selectThemeConteiner.classList.toggle('dark-mode')
  themeLight.classList.toggle('hide')
  themeDark.classList.toggle('hide')
})

buttonPlay.addEventListener('click', function () {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')

  countdown()
})

buttonPause.addEventListener('click', function () {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
})

buttonStop.addEventListener('click', function () {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
})






















