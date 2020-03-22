import React from "react"
// import { Location } from "@reach/router";
import translations from "../config/translations"
import Fade from "react-reveal/Fade"
import PersonalDetails from "./PersonalDetails"
import SocialIcons from "./SocialIcon"
import SkillsSection from "./SkillsWithPercentage"
import styles from "./layoutStyles"
import Experience from "./Experience"
// import SkillSet from "./SkillSet";

const TopBar = React.lazy(() => import("./Topbar"))

// const SKILLS_GLANCE_TITLE = "50px";

// #ef3f3f

export default function Layout(props) {
  return (
    <>
      <div style={{ height: "100vh" }}>
        <TopBar />
      </div>
      <div id="asd">
        <Fade big cascade>
          <div style={styles.mainContainer} className="personalInfoWrapper">
            <div style={styles.flexWrapper} className="socialAndDescription">
              <div style={styles.headingContainer}>
                <h1 style={{ margin: "0" }}>
                  Hi there, I am Sumanth Madishetty
                </h1>
              </div>
              <div style={styles.personalInfoContainer}>
                {translations.personalInfo}
              </div>
              <PersonalDetails />
              <SocialIcons />
            </div>
            <SkillsSection />
          </div>
        </Fade>
      </div>
      <Experience />
      {/* <SkillSet /> */}
    </>
  )
}
