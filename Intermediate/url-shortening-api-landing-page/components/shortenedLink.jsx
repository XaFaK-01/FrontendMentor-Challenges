import React, { useState, useRef } from "react"
import copy from "copy-to-clipboard"

const ShortenedLink = ({ shortenedLinks }) => {
  const [copySuccess, setCopySuccess] = useState()
  const linkToBeCopied = useRef()

  const copyLinkHandler = (shortenedUrl) => {
    linkToBeCopied.current = shortenedUrl

    copy(shortenedUrl, {
      onCopy: setCopySuccess(true),
    })

    setTimeout(() => {
      setCopySuccess(false)
    }, 1500)
  }

  return shortenedLinks.map((link) => (
    <div
      key={link.shortenedUrl}
      className="flex flex-col md:flex-row items-center  mt-14 md:mt-2 pr-2 md:pr-5 pl-3 py-2 w-full bg-white rounded-md md:rounded-sm"
    >
      <div className="flex-1 md:inline-block md:w-11/12 px-2">
        <div className=" md:flex md:justify-between md:items-center ">
          <p
            // style={{ fontSize: "15%" }}
            className="flex-shrink break-all text-md py-2 md:py-0 text-center md:text-left md:text-sm text-very-dark-violet-color"
          >
            {link.originalUrl}
          </p>
          <hr
            className="md:hidden bg-gray-color border-none"
            style={{ height: "2px" }}
          />
          <p className="flex-initial break-words py-2 md:py-0 text-center text-base md:text-left md:text-sm text-cyan-button-color">
            {link.shortenedUrl}
          </p>
        </div>
      </div>
      {/* custom copy button */}
      <div className="md:inline-block md:w-auto  md:ml-auto md:pl-3 w-full ">
        <div
          className={`cursor-pointer px-5 py-2 rounded-md  md:py-1 
          ${
            copySuccess && linkToBeCopied.current === link.shortenedUrl
              ? "bg-dark-violet-color md:px-4"
              : "bg-cyan-button-color md:px-6"
          }
          ${
            copySuccess && linkToBeCopied.current === link.shortenedUrl
              ? "hover:bg-dark-violet-color"
              : "hover:bg-cyan-button-hover-color"
          }  
          hover:bg-cyan-button-hover-color  md:inline-block`}
          onClick={() => copyLinkHandler(link.shortenedUrl)}
        >
          <p className={`text-white text-center md:text-xs font-bold`}>
            {copySuccess && linkToBeCopied.current === link.shortenedUrl
              ? "Copied!"
              : "Copy"}
          </p>
        </div>
      </div>
    </div>
  ))
}

export default ShortenedLink
