import React from "react"
import InfoCard from "./infoCard"

const ConnectedCards = () => {
  return (
    <div className="relative">
      <div className="relative z-50 grid md:grid-cols-3 md:gap-12">
        <div className="">
          <InfoCard
            cardTitle={"Brand Recognition"}
            cardInfo={
              "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
            }
            cardImage={"images/icon-brand-recognition.svg"}
          />
        </div>

        <div className="mt-20 md:mt-10 ">
          <InfoCard
            cardTitle={"Detailed Records"}
            cardInfo={
              "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.."
            }
            cardImage={"images/icon-detailed-records.svg"}
          />
        </div>

        <div className="mt-20 md:mt-20">
          <InfoCard
            cardTitle={"Fully Customizable"}
            cardInfo={
              "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
            }
            cardImage={"images/icon-fully-customizable.svg"}
          />
        </div>
      </div>
      <hr className="z-10 left-2/4 top-0 md:top-32 md:left-auto absolute border-none my-auto h-full w-2 md:h-2 md:w-full bg-cyan-button-color " />
    </div>
  )
}

export default ConnectedCards
