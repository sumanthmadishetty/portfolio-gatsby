import React from "react"
import { pageOneBackground } from "./Images"
import Typist from "react-typist"

export default function Pageone(props) {
  return (
    <div
      className="typeFont"
      style={{
        height: "100%",
        backgroundImage: `url(${pageOneBackground})`,
        backgroundSize: "cover",
        display: "flex",
        alignItems: "center",
        color: "white",
        paddingLeft: "15px",
      }}
    >
      <Typist stdTypingDelay={100}>
        <div id="titleHeaidng" style={{ fontSize: "35px" }}>
          <span>{`Hie & Welcome`}</span>
          <Typist.Delay ms={300}></Typist.Delay>
        </div>
        <span
          id="titleHeaidng"
          style={{
            fontSize: "55px",
            // fontWeight: "bold",
          }}
        >
          I am Sumanth Madishetty
        </span>
        <Typist.Delay ms={300}></Typist.Delay>
        <br />
        <span
          id="titleHeaidng"
          style={{
            fontSize: "20px",
            // fontWeight: "bold",
          }}
        >
          Full Stack Developer
        </span>
      </Typist>
    </div>
  )
}
