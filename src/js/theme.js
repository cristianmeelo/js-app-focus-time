
export function darkMode({ buttonLightTheme, buttonDarkTheme, selectTheme}) {

  buttonLightTheme.addEventListener('click', function () {
    buttonLightTheme.classList.add('hide')
    buttonDarkTheme.classList.remove('hide')
  
    selectTheme.classList.remove('dark-mode')
  })
  
  buttonDarkTheme.addEventListener('click', function () {
    buttonLightTheme.classList.remove('hide')
    buttonDarkTheme.classList.add('hide')
  
    selectTheme.classList.add('dark-mode')
  })

}

