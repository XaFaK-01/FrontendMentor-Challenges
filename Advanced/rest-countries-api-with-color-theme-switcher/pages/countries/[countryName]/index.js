import React, { useContext } from "react"
import { darkModeContext } from "../../../context/darkModeContext"
import { useRouter } from "next/router"
import PageTitle from "../../../components/pageTitle"

import BackButton from "../../../components/backButton"
import Link from "next/link"

const Home = ({ countryData, allCountries }) => {
  const [darkMode, setDarkMode] = useContext(darkModeContext)

  const router = useRouter()
  const { countryName } = router.query

  const findCountryName = (borderAlpha3Code) => {
    let countryName = ""

    allCountries.forEach((country) => {
      if (country.alpha3Code === borderAlpha3Code) {
        countryName = String(country.name)
      }
    })

    return countryName
  }

  return (
    <div
      className={`${
        darkMode && "dark"
      } text-light-mode-text bg-light-mode-background dark:bg-dark-mode-background dark:text-dark-mode-text-and-light-mode-elements`}
    >
      <div className="px-8 pb-52 md:px-12 md:py-2 md:pb-96 mt-16 h-full w-full text-light-mode-text bg-light-mode-background dark:bg-dark-mode-background dark:text-dark-mode-text-and-light-mode-elements">
        <PageTitle title={`${countryName}`} />
        <div className="">
          <div className="pt-12 w-32">
            <BackButton />
          </div>

          {countryData ? (
            <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2">
              <img
                className="w-full md:w-11/12"
                src={`${countryData.flag}`}
                alt={countryData.name}
              />
              <div className="my-auto">
                <h3 className="mb-5 text-2xl font-extrabold">
                  {countryData.name}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div>
                    <p className="text-xs my-3">
                      <strong>Native Name: </strong> {countryData.nativeName}
                    </p>
                    <p className="text-xs my-3">
                      <strong>Population: </strong> {countryData.population}
                    </p>
                    <p className="text-xs my-3">
                      <strong>Region: </strong> {countryData.region}
                    </p>
                    <p className="text-xs my-3">
                      <strong>Sub Region: </strong> {countryData.subregion}
                    </p>
                    <p className="text-xs my-3">
                      <strong>Capital: </strong> {countryData.capital}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs my-3">
                      <strong>Top Level Domain: </strong>
                      {countryData.topLevelDomain}
                    </p>
                    <p className="text-xs my-3">
                      <strong>Currencies: </strong>
                      {countryData.currencies[0].name}
                    </p>
                    <div className="text-xs my-3">
                      <strong>Languages: </strong>
                      {countryData.languages.map((language, index) => (
                        <p key={language.name} className="inline-block">
                          {language.name}
                          {index < countryData.languages.length - 1
                            ? ",\u00A0"
                            : ""}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="py-6">
                  <strong className="text-xs">Border Countries: </strong>
                  {countryData.borders.map((border) => (
                    <Link
                      key={border}
                      href={`/countries/${encodeURIComponent(
                        findCountryName(border)
                      )}`}
                    >
                      <a>
                        <div className="px-6 py-1 my-1 shadow-md border dark:border-black  inline-block mx-1 cursor-pointer">
                          <p
                            className=""
                            style={{ fontSize: "11px" }}
                            // onClick={() => Router.push(`/countries/pakistan`)}
                          >
                            {findCountryName(border)}
                          </p>
                        </div>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  )
}

export async function getStaticPaths() {
  const res = await fetch("https://restcountries.eu/rest/v2/all")
  const countriesData = await res.json()

  // Get the paths we want to pre-render based on countries
  const paths = countriesData.map(
    (country) =>
      `/countries/${country.name
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()}`
  )

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: true }
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://restcountries.eu/rest/v2/name/${params.countryName}`
  )

  const res2 = await fetch("https://restcountries.eu/rest/v2/all")

  const allCountries = await res2.json()

  const countryData = await res.json()

  return { props: { countryData: countryData[0], allCountries } }
}

export default Home
