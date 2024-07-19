const buttons = document.querySelectorAll(".background-Sounds button")

buttons.forEach((button) => {
  const img = button.querySelector("img")
  const originalSrc = img.src
  const hoverSrc = `./assets/images/${button.dataset.image}-white.svg`

  const updateImage = () => {
    if (button.classList.contains("playing")) {
      img.src = hoverSrc
    } else {
      img.src = originalSrc
    }
  }

  button.addEventListener("mouseover", () => {
    img.src = hoverSrc
  })

  button.addEventListener("mouseout", () => {
    updateImage()
  })

  const observer = new MutationObserver(updateImage)
  observer.observe(button, { attributes: true, attributeFilter: ["class"] })
})
