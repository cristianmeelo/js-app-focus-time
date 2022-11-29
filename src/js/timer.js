import { minutesDisplay } from "./elementes";

export default function Timer({
  minutesDisplay,
  secondsDisplay,
})

let minutes = Number(minutesDisplay.textContent)

function updateTimeDisplay(minutes, seconds){
  minutesDisplay.textContent = String(minutes).padStart(2, "0")
}