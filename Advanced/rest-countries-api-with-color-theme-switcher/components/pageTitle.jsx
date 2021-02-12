import React, { useContext } from "react"
import { darkModeContext } from "../context/darkModeContext"
import Head from "next/head"
export default function PageTitle({ title }) {
  const [darkMode, setDarkMode] = useContext(darkModeContext)

  return (
    <>
      <Head>
        <title>{title}</title>
         <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
    </>
  )
}
