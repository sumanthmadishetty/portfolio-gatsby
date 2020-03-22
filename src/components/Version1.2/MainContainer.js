import React from "react"
import ReactPageScroller from "react-page-scroller"
import Pageone from "./PageOne"

export default function MainContainer(props) {
  const { onPageChange, currentPage } = props
  return (
    <div>
      <ReactPageScroller
        containerWidth="inherit"
        customPageNumber={currentPage}
        containerHeight="100vh"
        pageOnChange={onPageChange}
      >
        <Pageone />
        <div style={{ backgroundColor: "red", height: "100%" }}>
          Second Page
        </div>
        <div style={{ backgroundColor: "blue", height: "100%" }}>
          Third Page
        </div>
      </ReactPageScroller>
    </div>
  )
}
