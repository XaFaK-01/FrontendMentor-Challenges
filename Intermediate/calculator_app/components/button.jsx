import React from "react"

const Button = ({
  btnTxt,
  bgClr,
  txtClr,
  shadowClr,
  fontSize,
  onClickHandler,
}) => {
  return (
    <div
      className={`rounded shadow py-2 sm:py-1 cursor-pointer text-xs ${bgClr} ${txtClr} sm:${fontSize}`}
      onClick={onClickHandler}
      style={{ boxShadow: `0px 3px 0px 0px ${shadowClr}` }}
    >
      <h4 className="text-center">{btnTxt}</h4>
    </div>
  )
}

export default Button
