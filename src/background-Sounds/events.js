import * as buttons from "./buttons.js"
import status from "./music-Status.js"
import * as musicBackground from "./music-Creation.js"

buttons.buttonTree.addEventListener("click", () => {
  if (status.tree === false) {
    musicBackground.tree.play()
    status.tree = !status.tree
    buttons.buttonTree.classList.add("playing")
  } else {
    musicBackground.tree.pause()
    status.tree = !status.tree
    buttons.buttonTree.classList.remove("playing")
  }
})

buttons.buttonRain.addEventListener("click", () => {
  if (status.rain === false) {
    musicBackground.rain.play()
    status.rain = !status.rain
    buttons.buttonRain.classList.add("playing")
  } else {
    musicBackground.rain.pause()
    status.rain = !status.rain
    buttons.buttonRain.classList.remove("playing")
  }
})

buttons.buttonCafeteria.addEventListener("click", () => {
  if (status.cafeteria === false) {
    musicBackground.cafeteria.play()
    status.cafeteria = !status.cafeteria
    buttons.buttonCafeteria.classList.add("playing")
  } else {
    musicBackground.cafeteria.pause()
    status.cafeteria = !status.cafeteria
    buttons.buttonCafeteria.classList.remove("playing")
  }
})

buttons.buttonfire.addEventListener("click", () => {
  if (status.fire === false) {
    musicBackground.fire.play()
    status.fire = !status.fire
    buttons.buttonfire.classList.add("playing")
  } else {
    musicBackground.fire.pause()
    status.fire = !status.fire
    buttons.buttonfire.classList.remove("playing")
  }
})
