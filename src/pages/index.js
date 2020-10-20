import React from "react"
import logo from "../../static/"
import Slide from "../components/Slide/Slide"

export default function Cover() {
  return (
    <Slide title="Cover">
      <img src={logo} alt="" width="300" height="auto" />
    </Slide>
  )
}
