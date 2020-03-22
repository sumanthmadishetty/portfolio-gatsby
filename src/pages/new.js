import React from "react"
import { Link } from "gatsby"
import Helmet from "react-helmet"
import SuspenseFallback from "../components/SuspenseFallback"

import Layout from "../components/Version1.2/Layout"
import "../components/Layout.css"

const IndexPage = () => (
  <React.Suspense fallback={<SuspenseFallback />}>
    <Helmet>
      <link
        href={`https://fonts.googleapis.com/css?family=Courier+Prime&display=swap`}
        rel="stylesheet"
      />
    </Helmet>
    <div
      className="layoutContainer"
      //   style={{ height: "100vh", overflowY: "hidden" }}
    >
      <Layout />
    </div>
  </React.Suspense>
)

export default IndexPage
