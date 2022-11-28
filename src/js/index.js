

const selectTheme = document.querySelector('#select-theme')
const themeLight = document.querySelector('.light')
const themeDark = document.querySelector('.dark')
const selectThemeConteiner = document.querySelector('main.container ')

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')


selectTheme.addEventListener('click', () => {
    selectThemeConteiner.classList.toggle('dark-mode')
    themeLight.classList.toggle('hide')
    themeDark.classList.toggle('hide')
  }),

buttonPlay.addEventListener('click', () => {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
  }),

buttonPause.addEventListener('click', () => {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
  })
















