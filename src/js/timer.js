export function Time({
  minutesDisplay,
  secondsDisplay,
  timeTimerOut,
  resetControls,
})


let minutes = Number(minutesDisplay.texcontent)

function updateTimerDisplay(minutes, seconds) {
  minutesDisplay.texcontent = String(minutes).padStart(2, '0')
  secondsDisplay.texcontent = String(minutes).padStart(2, '0')
}

function incrementTimer() {
  minutes = minutes + 5;
  updateTimerDisplay(minutes, 0)
}

function decrementTimer() {
  if (minutes <= 5) {
    sounds.alertAudio()
    alert('O tempo mínimo é de 5 minutos')
  } else {
    minutes = minutes - 5;
    updateTimerDisplay(minutes, 0)
  }

  function countdown() {
    timeTimerOut = setTimeout(function () {
      let minutes = Number(minutesDisplay.textContent)
      let seconds = Number(secondsDisplay.texcontent)

      if(minutes <= 0 && seconds <= 0){
        sounds.kitchenTimerAudio()
        resetControls()
        resertTimer()
        return;
      }
      
      updateTimerDisplay(minutes, seconds = String(seconds - 1))

      countdown()
    }, 1000)
  }

  function resetTimer() {
    clearTimeout(timeTimerOut);
    updateTimerDisplay(minutes, 0)
  }

  function hold(){
    clearTimeout(timeTimerOut)
  }

  return {
    incrementTimer,
    decrementTimer,
    countdown,
    resetTimer,
    hold,
  }
}