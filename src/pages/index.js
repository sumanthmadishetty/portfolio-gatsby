import React from "react"
import { Link } from "gatsby"
import SuspenseFallback from "../components/SuspenseFallback"

import Layout from "../components/Layout"
import "../components/Layout.css"

const IndexPage = () => (
  <React.Suspense fallback={<SuspenseFallback />}>
    <div className="App">
      <Layout />
    </div>
  </React.Suspense>
)

export default IndexPage
