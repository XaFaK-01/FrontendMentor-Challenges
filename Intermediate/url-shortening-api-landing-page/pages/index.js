import { useState } from "react"
import PageTitle from "../components/pageTitle"
import NavigationBar from "../components/navigationBar"
import Layout from "../HOC/layout"
import IntroductorySection from "../components/introductorySection"
import InputLink from "../components/inputLink"
import ShortenedLink from "../components/shortenedLink"
import AdvancedStatisticsSection from "../components/advancedStatisticsSection"
import ConnectedCards from "../components/connectedCards"
import BoostYourLinks from "../components/boostYourLinks"
import Footer from "../components/footer"
import axios from "axios"

export default function Home() {
  const [originalUrl, setOriginalUrl] = useState("")
  const [shortenItClicked, setShortenItClicked] = useState(false)
  const [shortenedLinks, setShortenedLinks] = useState([
    {
      originalUrl: "https://www.frontendmentor.io/profile/XaFaK-01",
      shortenedUrl: "rebrand.ly/7dvxcsj",
    },
  ])
  const [fetching, setFetching] = useState(false)

  const shortenLinkHandler = async () => {
    setShortenItClicked(true)
    setFetching(true)

    const res = await axios({
      method: "GET",
      url: `https://api.shrtco.de/v2/shorten?url=${originalUrl}`,
    })

    if (res) {
      if (res.data) {
        setFetching(false)
      }
    }
    let newShortenedUrl = {
      originalUrl: originalUrl,
      shortenedUrl: res.data.result.short_link,
    }

    setShortenedLinks((prevState) => [...prevState, newShortenedUrl])

    setTimeout(() => {
      setShortenItClicked(false)
    }, 3000)
  }

  return (
    <>
      <PageTitle title="Shorten and rebrand your links!" />
      <section className="pt-4 md:pt-0 pb-16">
        <Layout>
          <NavigationBar />
          <IntroductorySection />
        </Layout>
      </section>
      <section className="py-12 mt-20" style={{ backgroundColor: "#f0f1f6" }}>
        <Layout>
          <div className="relative">
            <InputLink
              originalUrl={originalUrl}
              setOriginalUrl={setOriginalUrl}
              shortenLinkHandler={shortenLinkHandler}
              shortenItClicked={shortenItClicked}
              fetching={fetching}
            />
          </div>
          <ShortenedLink shortenedLinks={shortenedLinks} />
          <AdvancedStatisticsSection />
          <div className="mt-20">
            <ConnectedCards />
          </div>
        </Layout>
      </section>
      <BoostYourLinks />
      <Footer />
    </>
  )
}
