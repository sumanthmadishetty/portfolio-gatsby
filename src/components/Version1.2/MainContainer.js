import React from "react"
import ReactPageScroller from "react-page-scroller"
import Pageone from "./PageOne"
import PageTwo from "./PageTwo"

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
        <PageTwo />
        <div style={{ backgroundColor: "blue", height: "100%" }}>
          Third Page
        </div>
      </ReactPageScroller>
    </div>
  )
}
