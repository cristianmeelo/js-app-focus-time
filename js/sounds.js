export default function () {
  const forestAudio = new Audio("./audio/forest.wav")
  const rainAudio = new Audio("./audio/rain.wav")
  const storeAudio = new Audio("./audio/store.wav")
  const fireAudio = new Audio("./audio/fire.wav")
  const edmAudio = new Audio("./audio/edm.wav")
  const beachAudio = new Audio("./audio/beach.wav")

  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const alarm = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

  forestAudio.loop = true
  rainAudio.loop = true
  storeAudio.loop = true
  fireAudio.loop = true
  edmAudio.loop = true
  beachAudio.loop = true

  function pressButton() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    alarm.play()
  }

  return {
    forestAudio,
    rainAudio,
    storeAudio,
    fireAudio,
    edmAudio,
    beachAudio,
    pressButton,
    timeEnd,
  }
}
