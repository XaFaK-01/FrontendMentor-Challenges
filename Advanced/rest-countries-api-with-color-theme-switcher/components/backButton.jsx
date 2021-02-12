import React from "react"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Link from "next/link"
import Router from "next/router"

const BackButton = () => {
  return (
    <>
      <div className="border-3 shadow-md rounded-md  cursor-pointer px-8 py-2 dark:bg-dark-mode-elements" onClick={() => Router.push('/')}>
        <div className={`flex justify-between items-center`}>
          <div className="w-4">
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
          <div>
            <p className="text-sm">Back</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default BackButton
