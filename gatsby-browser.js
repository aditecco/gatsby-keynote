// https://www.gatsbyjs.org/docs/browser-apis/

import { navigate } from "gatsby"
import "./src/styles/index.scss"

window.arrowKeyNavigator = (function () {
  const SLIDES = Array(12)
    .fill()
    .map((_, i) => (i === 0 ? `/` : `/slides/${i}`))

  // listener
  function listener(e) {
    switch (e.key) {
      case "ArrowRight": {
        navigateToNextSlide()
        break
      }

      case "ArrowLeft": {
        navigateToPrevSlide()
        break
      }

      default:
        return
    }
  }

  // navigateToNextPage
  function navigateToNextSlide() {
    navigate(SLIDES[SLIDES.findIndex(matchSlide) + 1])
  }

  // navigateToPrevPage
  function navigateToPrevSlide() {
    navigate(SLIDES[SLIDES.findIndex(matchSlide) - 1])
  }

  // matchPage
  function matchSlide(slide) {
    return slide === window.location.pathname
  }

  // destroy
  function attachListener() {
    document.body.addEventListener("keydown", listener)

    console.info("arrowKeyNavigator: attached event listener.")
  }

  // destroy
  function destroyListener() {
    document.body.removeEventListener("keydown", listener)

    console.info("arrowKeyNavigator: destroyed event listener.")
  }

  // attaching the listener
  attachListener()

  return {
    navigate,
    attachListener,
    destroyListener,
    navigateToNextPage: navigateToNextSlide,
    navigateToPrevPage: navigateToPrevSlide,
    SLIDES,
  }
})()

// gatsby-plugin-transitions
export const shouldUpdateScroll = () => {
  return false
}
