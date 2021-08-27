import React from "react"
import { useSelector } from "react-redux"
import Layout from "../components/layout"
import TopHeader from "../components/topHeader"
import Screen from "../components/screen"
import Keypad from "../components/keypad"
import PageTitle from "../components/pageTitle"

export default function Home() {
  const currentTheme = useSelector((state) => state.currentTheme)

  return (
    <div
      className={`
         ${
           currentTheme.id === "1"
             ? `bg-theme-1-backgrounds-main-background text-theme-1-text-2-color`
             : currentTheme.id === "2"
             ? "bg-theme-2-backgrounds-main-background text-theme-2-text-2-color"
             : "bg-theme-3-backgrounds-main-background text-theme-3-text-1-color"
         }`}
    >
      <PageTitle />
      <Layout>
        <TopHeader />
        <Screen />
        <Keypad />
      </Layout>
    </div>
  )
}
