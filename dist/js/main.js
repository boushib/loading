window.onload = () => {
  const spinner = document.getElementById('spinner')
  const fadeEffect = setInterval(() => {
    if (!spinner.style.opacity) {
      spinner.style.opacity = 1
    }
    if (spinner.style.opacity > 0) {
      spinner.style.opacity -= 0.05
    } else {
      clearInterval(fadeEffect)
    }
  }, 80)

  fadeEffect()
}
