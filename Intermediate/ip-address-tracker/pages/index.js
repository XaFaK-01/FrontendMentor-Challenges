import { useRef, useState, useEffect } from "react"
import PageTitle from "../components/pageTitle"
import IntroSection from "../components/introSection"
import IpAddressDetails from "../components/ipAddressDetails"

import dynamic from "next/dynamic"

export default function Home({ currentUserIpAddressDetails }) {
  const MapWithNoSSR = dynamic(() => import("../components/map"), {
    ssr: false,
  })

  const [fetching, setFetching] = useState(false)
  const [error, setError] = useState({ error: false, message: "" })

  // const [ipAddress, setIpAddress] = useState("")
  const [currentUserDetails, setCurrentUserDetails] = useState({})

  useEffect(() => {
    setCurrentUserDetails({
      ipAddress: currentUserIpAddressDetails.ip,
      location:
        currentUserIpAddressDetails.location.city +
        ", " +
        currentUserIpAddressDetails.location.region +
        ", " +
        currentUserIpAddressDetails.location.geonameId,
      timezone: "UTC " + currentUserIpAddressDetails.location.timezone,
      isp: currentUserIpAddressDetails.as.name,
      lat: currentUserIpAddressDetails.location.lat,
      lng: currentUserIpAddressDetails.location.lng,
    })
  }, [currentUserIpAddressDetails])

  const searchIpAddressHandler = async (userTypedIpAddress) => {
    setFetching(true)
    const customAddress = `https://geo.ipify.org/api/v1?apiKey=${process.env.IPIFY_API_KEY}&ipAddress=${userTypedIpAddress}`

    try {
      const res = await fetch(customAddress)

      const customUserIpAddressDetails = await res.json()
      setCurrentUserDetails({
        ipAddress: customUserIpAddressDetails.ip,
        location:
          customUserIpAddressDetails.location.city +
          ", " +
          customUserIpAddressDetails.location.region +
          ", " +
          customUserIpAddressDetails.location.geonameId,
        timezone: "UTC " + customUserIpAddressDetails.location.timezone,
        isp: customUserIpAddressDetails.as.name,
        lat: customUserIpAddressDetails.location.lat,
        lng: customUserIpAddressDetails.location.lng,
      })
      setFetching(false)
      setError({ error: false })
    } catch (error) {
      setFetching(false)
      setError({ error: true, message: error.message })
    }
  }

  return (
    <div className="relative">
      <PageTitle title="IP Address Tracker" />
      <IntroSection
        // ipAddress={ipAddress}
        // setIpAddress={setIpAddress}
        searchIpAddressHandler={searchIpAddressHandler}
        fetching={fetching}
        error={error}
      />
      <IpAddressDetails
        ipAddress={currentUserDetails.ipAddress}
        location={currentUserDetails.location}
        timezone={currentUserDetails.timezone}
        isp={currentUserDetails.isp}
      />

      <MapWithNoSSR lat={currentUserDetails.lat} lng={currentUserDetails.lng} />
      <footer className="inline-block absolute bottom-0 w-full bg-white bg-opacity-40">
        <div className="inline-block text-center w-full mx-auto">
          <span>Developed by </span>
          <a
            className="cursor-pointer text-blue-700"
            href="https://github.com/XaFaK-01"
          >
            XaFaK
          </a>
        </div>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  const defaultAddress = `https://geo.ipify.org/api/v1?apiKey=${process.env.IPIFY_API_KEY}`
  const res = await fetch(defaultAddress)
  const currentUserIpAddressDetails = await res.json()

  return {
    props: {
      currentUserIpAddressDetails,
    },
  }
}
