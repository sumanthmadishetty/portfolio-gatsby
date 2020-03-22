import React, { useState } from "react"
import Sidebar from "./Sidebar"
import "./styles.css"
import MainContainer from "./MainContainer"

export default function Layout(props) {
  const [page, setPage] = useState(1)

  function onPageChange(a) {
    setPage(a)
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "3fr 9fr",
        height: "100%",
      }}
    >
      <Sidebar onPageChange={onPageChange} />
      <div
        id="differentRoutes"
        style={{ backgroundColor: "white", opacity: "1" }}
      >
        <MainContainer currentPage={page} onPageChange={onPageChange} />
      </div>
    </div>
  )
}
