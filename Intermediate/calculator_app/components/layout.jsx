import React from "react"

const Layout = ({ children }) => {
  return (
    <div className="w-11/12 md:w-6/12 mx-auto py-2 md:pt-5 h-max ">
      {children}
    </div>
  )
}

export default Layout
