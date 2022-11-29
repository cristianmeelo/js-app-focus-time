const selectTheme = document.querySelector('#select-theme')
const themeLight = document.querySelector('.light')
const themeDark = document.querySelector('.dark')
const selectThemeConteiner = document.querySelector('main.container ')

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')


selectTheme.addEventListener('click', function() {
  selectThemeConteiner.classList.toggle('dark-mode')
  themeLight.classList.toggle('hide')
  themeDark.classList.toggle('hide')
})

buttonPlay.addEventListener('click', function () {
  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')
})

buttonPause.addEventListener('click', function () {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
})

buttonStop.addEventListener('click', function () {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
})




















