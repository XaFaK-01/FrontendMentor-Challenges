import React, { useState } from "react"
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const Dropdown = ({ selectedRegion, setSelectedRegion }) => {
  const [showRegions, setShowRegions] = useState(false)
  const continents = ["All", "Africa", "America", "Asia", "Europe", "Oceania"]

  const selectRegionHandler = (regionName) => {
    setShowRegions(false)
    setSelectedRegion(regionName)
  }
  return (
    <>
      <div>
        <div
          className="border-3 shadow-md rounded-md px-5 py-4 cursor-pointer bg-dark-mode-text-and-light-mode-elements dark:bg-dark-mode-elements"
          onClick={() => setShowRegions((prevState) => !prevState)}
        >
          <div className="flex justify-between items-center">
            <div className="w-36">
              <p className="text-sm">
                {selectedRegion
                  ? selectedRegion !== "All"
                    ? selectedRegion
                    : "Filter by Region"
                  : "Filter by Region"}
              </p>
            </div>
            <div className="inline-block w-2">
              <FontAwesomeIcon icon={faChevronDown} />
            </div>
          </div>
        </div>

        {showRegions && (
          <div className="absolute rounded-md border-3 shadow-md w-48 py-3 mt-1 cursor-pointer bg-dark-mode-text-and-light-mode-elements dark:bg-dark-mode-elements">
            {continents.map((continent) => (
              <p
                key={continent}
                className="text-sm px-5 py-1 hover:bg-blue-500"
                onClick={() => selectRegionHandler(continent)}
              >
                {continent}
              </p>
            ))}
          </div>
        )}
      </div>
    </>
  )
}

export default Dropdown
