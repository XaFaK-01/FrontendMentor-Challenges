import React from "react"
import Link from "next/link"

const CountryCard = ({ countryInfo }) => {
  return (
    <Link
      href={`/countries/${encodeURIComponent(
        countryInfo.name
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .toLowerCase()
      )}`}
    >
      <a>
        <div className="w-full rounded-md min-h-full overflow-hidden bg-dark-mode-text-and-light-mode-elements dark:text-dark-mode-text-and-light-mode-elements dark:bg-dark-mode-elements ">
          <img
            className="w-full h-40 object-cover"
            src={countryInfo.flag}
            alt={countryInfo.name}
          />
          <div className="px-8 pt-5 pb-11 bg-dark-mode-text-and-light-mode-elements dark:bg-dark-mode-elements ">
            <h3 className="text-xl font-bold">{countryInfo.name}</h3>
            <div className="mt-5">
              <p className="text-base">
                <strong>Population: </strong>
                {countryInfo.population}
              </p>
              <p className="text-base">
                <strong>Region: </strong>
                {countryInfo.region}
              </p>
              <p className="text-base">
                <strong>Capital: </strong>
                {countryInfo.capital}
              </p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default CountryCard
