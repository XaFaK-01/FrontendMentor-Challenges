import React from "react"

const Button = ({
  buttonTitle,
  callback,
  titleSizeBase,
  titleSizeMd,
  paddingXMd,
  paddingYMd,
  paddingXBase,
  paddingYBase,
  rounded,
  width,
  widthMd,
}) => {
  const callbackHandler = () => {
    callback()
  }

  return (
    <div
      className={`cursor-pointer ${width ? width : ""} md:${
        widthMd ? widthMd : ""
      } ${paddingXBase ? paddingXBase : "px-4"} ${
        paddingYBase ? paddingYBase : "px-4"
      } ${rounded ? rounded : "rounded-xl"} md:${
        paddingXMd ? paddingXMd : "px-4"
      } md:${
        paddingYMd ? paddingYMd : "py-1"
      } bg-cyan-button-color hover:bg-cyan-button-hover-color md:inline-block`}
      onClick={callback && callbackHandler}
    >
      <p
        className={`text-white text-center ${titleSizeBase} md:${titleSizeMd} font-bold`}
      >
        {buttonTitle}
      </p>
    </div>
  )
}

export default Button
