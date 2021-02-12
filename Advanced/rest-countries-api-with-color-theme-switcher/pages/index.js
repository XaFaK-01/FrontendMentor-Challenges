import React, { useState, useContext } from "react"
import { darkModeContext } from "../context/darkModeContext"
import PageTitle from "../components/pageTitle"
import SearchBar from "../components/searchBar.jsx"
import DropDown from "../components/dropdown"
import CountryCard from "../components/countryCard"

const Home = ({ fetchedCountriesData }) => {
  const [darkMode, setDarkMode] = useContext(darkModeContext)

  const [searchCountry, setSearchCountry] = useState("")
  const [selectedRegion, setSelectedRegion] = useState("All")

  return (
    <div className={`${darkMode && "dark"}`}>
      <PageTitle title="Where in the world?" />
      <div
        className={`px-5 md:px-16 md:py-2 md:pb-80 mt-16 h-full w-full text-light-mode-text bg-light-mode-background dark:bg-dark-mode-background dark:text-dark-mode-text-and-light-mode-elements`}
      >
        <div className="md:flex md:justify-between md:items-center w-full">
          <div className="pt-12">
            <SearchBar
              searchCountry={searchCountry}
              setSearchCountry={setSearchCountry}
              selectedRegion={selectedRegion}
            />
          </div>
          <div className="mt-12 w-2/4 md:w-auto">
            <DropDown
              selectedRegion={selectedRegion}
              setSelectedRegion={setSelectedRegion}
            />
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 px-10 gap-10 md:grid-cols-4 md:gap-16 md:px-0 ">
          {fetchedCountriesData && selectedRegion !== "All" ? (
            fetchedCountriesData.map((country) => {
              if (
                country.region
                  .toLowerCase()
                  .search(selectedRegion.toLowerCase()) !== -1
              ) {
                return <CountryCard key={country.name} countryInfo={country} />
              }
            })
          ) : fetchedCountriesData ? (
            fetchedCountriesData.map((country) => {
              if (
                country.name
                  .toLowerCase()
                  .search(searchCountry.toLowerCase()) !== -1
              ) {
                return <CountryCard key={country.name} countryInfo={country} />
              }
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch("https://restcountries.eu/rest/v2/all")
  const fetchedCountriesData = await res.json()

  return {
    props: {
      fetchedCountriesData,
    },
  }
}

export default Home
