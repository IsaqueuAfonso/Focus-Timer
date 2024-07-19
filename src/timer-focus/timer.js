import status from "../timer-focus/status.js"
import * as el from "../timer-focus/elements.js"
import { reset } from "./actions.js"
import * as sounds from "./sounds.js"

export function countdown() {
  clearTimeout(status.countdownId)

  if (!status.isRunning) {
    return
  }

  let minutes = Number(el.minutes.textContent)
  let seconds = Number(el.seconds.textContent)

  seconds--

  if (seconds < 0) {
    seconds = 59
    minutes--
  }

  if (minutes < 0) {
    reset()
    sounds.kitchenTimer.play()
    return
  }

  updateDisplay(minutes, seconds)
  status.countdownId = setTimeout(() => countdown(), 1000)
}

export function updateDisplay(minutes, seconds) {
  minutes = minutes ?? status.minutes
  seconds = seconds ?? status.seconds

  el.minutes.textContent = String(minutes).padStart(2, "0")
  el.seconds.textContent = String(seconds).padStart(2, "0")
}
