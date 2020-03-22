import React from "react"
import {
  avataar,
  telephone,
  mail,
  linkedinIcon,
  stackoverflow,
  github,
} from "./Images"

const pageData = ["Page1", "Page2", "Page3"]

export default function Sidebar(props) {
  const { onPageChange } = props
  return (
    <div
      id="sidebar"
      style={{
        backgroundColor: "#30305f",
        padding: "30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        // justifyContent: "space-between",
      }}
    >
      <Avataar />
      <div
        id="nameAndProfession"
        style={{ color: "white", marginTop: "20px", textAlign: "center" }}
      >
        <div style={{ fontSize: "35px", textTransform: "uppercase" }}>
          Sumanth Madishetty
        </div>
        <div style={{ fontSize: "20px" }}>Web Developer</div>
      </div>
      <div id="mobileAndEmail">
        <TelephoneIconWithNumber />
        <EmailWithIcon />
      </div>
      <div id="links">
        {pageData.map((l, i) => (
          <div onClick={() => onPageChange(i)}>{l}</div>
        ))}
      </div>
      <div
        style={{
          marginTop: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignSelf: "center",
        }}
      >
        <SocialIcon icon={linkedinIcon} href="www.google.com" />
        <SocialIcon icon={stackoverflow} href="www.google.com" />
        <SocialIcon icon={github} href="www.google.com" />
      </div>
    </div>
  )
}

function Avataar() {
  return (
    <div>
      <img
        src={avataar}
        style={{ borderRadius: "150px", height: "200px", width: "200px" }}
        alt="avtaaar"
      />
    </div>
  )
}

function TelephoneIconWithNumber() {
  return (
    <div
      style={{ display: "flex", marginTop: "30px", justifyContent: "center" }}
    >
      <img
        src={telephone}
        alt="telephone"
        style={{ width: "20px", height: "20px", marginRight: "10px" }}
      />
      <a style={{ color: "white" }} href="tel:+918099211177">
        +91-8099211177
      </a>
    </div>
  )
}

function EmailWithIcon() {
  return (
    <div
      style={{ display: "flex", marginTop: "15px", justifyContent: "center" }}
    >
      <img
        src={mail}
        alt="telephone"
        style={{ width: "20px", height: "20px", marginRight: "10px" }}
      />
      <a style={{ color: "white" }} href="mailto:mailme@sumanth.tech">
        mailme@sumanth.tech
      </a>
    </div>
  )
}

function SocialIcon({ href, icon }) {
  return (
    <a href={href} target="_blank">
      <img height="50" width="50" src={icon} alt="socialIcon" />
    </a>
  )
}
