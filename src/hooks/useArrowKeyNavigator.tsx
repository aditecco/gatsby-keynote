/* ---------------------------------
useArrowKeyNavigator
--------------------------------- */

import { navigate } from "gatsby"
import { useEffect, useState } from "react"

export default function useArrowKeyNavigator(slides: string[]) {
  const [initiated, setInitiated] = useState<boolean>(false)

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

  // navigateToNextSlide
  function navigateToNextSlide() {
    navigate(slides[slides?.findIndex(matchSlide) + 1])
  }

  // navigateToPrevSlide
  function navigateToPrevSlide() {
    navigate(slides[slides?.findIndex(matchSlide) - 1])
  }

  // matchPage
  function matchSlide(slide) {
    return slide === window?.location?.pathname
  }

  // destroy
  function attachListener() {
    document?.body?.addEventListener?.("keydown", listener)

    console?.info("arrowKeyNavigator: attached event listener.")
  }

  // destroy
  function destroyListener() {
    document?.body?.removeEventListener?.("keydown", listener)

    console?.info("arrowKeyNavigator: destroyed event listener.")
  }

  // init on mount
  useEffect(() => {
    if (slides?.length && document?.body) {
      attachListener()

      setInitiated(true)
    }

    return () => slides?.length && document?.body && destroyListener()
  }, [])

  return [
    initiated,
    {
      navigateToPrevSlide,
      navigateToNextSlide,
      attachListener,
      destroyListener,
    },
  ]
}
