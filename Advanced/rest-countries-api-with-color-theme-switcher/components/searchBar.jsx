import React from "react"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const SearchBar = ({ searchCountry, setSearchCountry, selectedRegion }) => {
  return (
    <div className="border-3 shadow-md rounded-md px-8 py-4 bg-dark-mode-text-and-light-mode-elements dark:bg-dark-mode-elements">
      <div className={`flex justify-between items-center`}>
        <div className="inline-block w-8 md:w-5 cursor-pointer">
          <FontAwesomeIcon icon={faSearch} />
        </div>
        <div className="ml-10 w-96">
          <input
            className="w-full bg-dark-mode-text-and-light-mode-elements dark:bg-dark-mode-elements focus:outline-none "
            name="country"
            type="text"
            disabled={selectedRegion !== "All"}
            value={searchCountry}
            onChange={(e) => setSearchCountry(e.target.value)}
            placeholder="Search for a country..."
            required
          />
        </div>
      </div>
    </div>
  )
}

export default SearchBar
