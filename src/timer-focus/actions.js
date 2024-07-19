import status from "../timer-focus/status.js"
import * as timer from "./timer.js"
import * as el from "../timer-focus/elements.js"
import * as sounds from "./sounds.js"
import * as events from "../timer-focus/events.js"

export function toggleRunning() {
  status.isRunning = document.documentElement.classList.toggle("running")
  timer.countdown()
  sounds.buttonPressAudio.play()
}

export function reset() {
  status.isRunning = false
  document.documentElement.classList.remove("running")
  timer.updateDisplay(0, 3)
  sounds.buttonPressAudio.play()
}

export function set() {
  el.minutes.setAttribute("contenteditable", true)
  el.minutes.focus()
}

export function plus() {
  let minutes = Number(el.minutes.textContent)
  minutes += 5
  sounds.buttonPressAudio.play()
  if (minutes > 60) {
    return
  }
  timer.updateDisplay(minutes)
}

export function minus() {
  let minutes = Number(el.minutes.textContent)
  minutes -= 5
  sounds.buttonPressAudio.play()
  if (minutes < 0) {
    return
  }
  timer.updateDisplay(minutes)
}
