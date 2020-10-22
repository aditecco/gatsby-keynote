import React from "react"
// import logo from "../../static/"
import Slide from "../layouts/Slide/Slide"

export default function Cover() {
  return (
    <Slide title="Cover">
      <img src={""} alt="" width="300" height="auto" />
      <h1
        style={{
          fontFamily: "Helvetica, sans-serif",
          fontSize: 160,
          fontWeight: 300,
          color: "whitesmoke",
        }}
      >
        Cover
      </h1>
    </Slide>
  )
}
