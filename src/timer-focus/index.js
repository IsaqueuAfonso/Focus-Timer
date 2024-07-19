import status from "../timer-focus/status.js"
import * as events from "../timer-focus/events.js"
import * as timer from "./timer.js"

export function start(minutes, seconds) {
  status.minutes = minutes
  status.seconds = seconds

  timer.updateDisplay()
  events.registerControls()
  events.setMinutes()
}
