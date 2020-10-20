// https://www.gatsbyjs.org/docs/browser-apis/

import { navigate } from "gatsby"
import "./src/styles/index.scss"

window.arrowKeyNavigator = (function () {
  const PAGES = ["/", "/slides/one", "/slides/two", "/slides/three"]

  // listener
  function listener(e) {
    switch (e.key) {
      case "ArrowRight": {
        navigateToNextPage()
        break
      }

      case "ArrowLeft": {
        navigateToPrevPage()
        break
      }

      default:
        return
    }
  }

  // navigateToNextPage
  function navigateToNextPage() {
    navigate(PAGES[PAGES.findIndex(matchPage) + 1])
  }

  // navigateToPrevPage
  function navigateToPrevPage() {
    navigate(PAGES[PAGES.findIndex(matchPage) - 1])
  }

  // matchPage
  function matchPage(page) {
    return page === window.location.pathname
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
    navigateToNextPage,
    navigateToPrevPage,
    PAGES,
  }
})()
