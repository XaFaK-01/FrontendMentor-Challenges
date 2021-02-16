import React from "react"
import Head from "next/head"

const PageTitle = ({ title }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>
    </>
  )
}

export default PageTitle
