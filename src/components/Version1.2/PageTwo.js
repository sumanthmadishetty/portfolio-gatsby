import React, { useState } from "react"
import Card from "@material-ui/core/Card"
// import CardActions from "@material-ui/core/CardActions"
import CardHeader from "@material-ui/core/CardHeader"
import CardContent from "@material-ui/core/CardContent"
import { abhipaisa, pageTwoBackground } from "./Images"
import { CardActions, Button } from "@material-ui/core"

export default function PageTwo(props) {
  return (
    <div
      style={{
        padding: "15px",
        backgroundColor: "#c1282d",
        height: "100%",
      }}
    >
      <h1>Experience:</h1>
      <h1>Current Employer: </h1>
      <CurrentEmployer />
      <ProjectsList>
        <Projects />
        <Projects />
        <Projects />
        <Projects />
        <Projects />
      </ProjectsList>
    </div>
  )
}

function CurrentEmployer() {
  return (
    <div>
      <div>Techsophy</div>
      <div>Scince May 2018</div>
    </div>
  )
}

function ProjectsList({ children }) {
  return (
    <div className="projectsList">
      {/* <div style={{ gridColumn: 1 }}></div> */}
      {children}
    </div>
  )
}

function Projects() {
  const [hovering, setHovering] = useState(false)
  return (
    <Card
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      style={{ height: "300px" }}
    >
      <CardContent>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "8px",
          }}
        >
          <img src={abhipaisa} alt="title" style={{}} />
          <p style={{ marginTop: "15px", textAlign: "left" }}>
            Abhipaisa is a mobile app to get a loan in 30 minutes AbhiPaisa App
            is India's first mobile app that disburses short-term and flexible
            loans within minutes!
          </p>
        </div>
      </CardContent>
      <CardActions disableSpacing>
        <Button size="medium" color="primary" style={{ marginLeft: "auto" }}>
          <a
            className="noDecoration"
            href="http://www.abhipaisa.com"
            target="_blank"
          >
            Website
          </a>
        </Button>
      </CardActions>
      )
    </Card>
  )
}
