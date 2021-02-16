import React, { useState } from "react"
import Button from "./button"

const InputLink = ({
  originalUrl,
  setOriginalUrl,
  shortenLinkHandler,
  shortenItClicked,
}) => {
  return (
    <div className="rounded-md absolute -bottom-6 md:bottom-3 w-full px-10 py-8 my-auto bg-dark-violet-color bg-shorten-mobile bg-no-repeat bg-right-top md:bg-shorten-desktop">
      <div className="w-full md:inline-block md:w-9/12 ">
        <input
          name="URL_to_shrink"
          className="w-full outline-none px-4 py-3 rounded-md text-sm"
          placeholder="Shorten a link here..."
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
        />
      </div>
      {originalUrl === "" && shortenItClicked && (
        <p
          className={`md:hidden my-1 text-xs w-full text-red-warning-color italic`}
        >
          Please add a link
        </p>
      )}

      <div className="my-2 inline-block md:ml-4 w-full md:w-auto">
        <Button
          buttonTitle="Shorten It!"
          callback={shortenLinkHandler}
          titleSizeBase="text-xs"
          titleSizeMd="text-xs"
          paddingXMd="px-6"
          paddingYMd="py-3"
          paddingXBase="px-6"
          paddingYBase="py-3"
          rounded="rounded-md"
          width="w-full"
          widthMd="w-32"
        />
      </div>
      {originalUrl === "" && shortenItClicked && (
        <p
          className={`hidden md:block my-1 text-xs w-full text-red-warning-color italic`}
        >
          Please add a link
        </p>
      )}
    </div>
  )
}

export default InputLink
