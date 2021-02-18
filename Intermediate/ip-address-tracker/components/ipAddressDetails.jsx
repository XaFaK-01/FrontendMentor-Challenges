import React from "react"
import IpAddressDetailsItem from "./ipAddressDetailsItem"
import VerticalLine from "./verticalLine"

const IpAddressDetails = ({ ipAddress, location, timezone, isp }) => {
  return (
    <div className="z-50 relative mx-auto w-10/12 md:w-9/12">
      <div className="absolute mx-auto w-full -top-36 md:-top-28 py-5 md:px-7 md:py-9 rounded-xl bg-white  shadow-2xl md:grid md:grid-flow-col md:auto-cols-auto justify-start items-center">
        <IpAddressDetailsItem heading="IP ADDRESS" detail={ipAddress} />
        <VerticalLine height="80px" />
        <IpAddressDetailsItem
          heading="LOCATION"
          detail={location}
          hasVerticalLine={true}
        />
        <VerticalLine height="80px" />
        <IpAddressDetailsItem
          heading="TIMEZONE"
          detail={timezone}
          hasVerticalLine={true}
        />
        <VerticalLine height="80px" />
        <IpAddressDetailsItem
          heading="ISP"
          detail={isp}
          hasVerticalLine={true}
        />
      </div>
    </div>
  )
}

export default IpAddressDetails
