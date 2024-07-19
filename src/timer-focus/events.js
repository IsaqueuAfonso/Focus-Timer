import { controls } from "../timer-focus/elements.js"
import * as actions from "../timer-focus/actions.js"
import * as el from "../timer-focus/elements.js"
import status from "../timer-focus/status.js"
import * as timer from "./timer.js"
import * as FocusTimer from "./index.js"

export function registerControls() {
  controls.addEventListener("click", (event) => {
    const action = event.target.dataset.action
    if (typeof actions[action] != "function") {
      return
    }

    actions[action]()
  })
}

export function setMinutes() {
  el.minutes.addEventListener("focus", () => {
    el.minutes.textContent = ""
    el.minutes.onkeypress = (event) => /\d/.test(event.key)
    el.minutes.addEventListener("blur", (event) => {
      let time = event.currentTarget.textContent
      time = time > 60 ? 60 : time

      status.minutes = time
      status.seconds = 0

      timer.updateDisplay()
      el.minutes.removeAttribute("contenteditable")
    })
  })
}


