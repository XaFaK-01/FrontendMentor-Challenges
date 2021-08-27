import React from "react"
import { useSelector, useDispatch } from "react-redux"
import Button from "./button"

import {
  calculateValue,
  deleteValueFromMemory,
  pushValueToMemory,
  resetMemory,
} from "../actions/memoryActions"

const Keypad = () => {
  const currentTheme = useSelector((state) => state.currentTheme)
  const dispatch = useDispatch()

  // calculation operations handler

  const pushValueToMemoryHandler = (value) => {
    dispatch(pushValueToMemory(value))
  }

  const deleteValueFromMemoryHandler = () => {
    dispatch(deleteValueFromMemory())
  }

  const resetMemoryHandler = () => {
    dispatch(resetMemory())
  }

  const calculateValueHandler = () => {
    dispatch(calculateValue())
  }

  // keypad layout entries
  const firstRowNumericalKeys = ["7", "8", "9"]
  const secondThirdFourthRowKeys = [
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "-",
    ".",
    "0",
    "/",
    "*",
  ]
  return (
    <div
      className={`mb-10 ${
        currentTheme.id === "1"
          ? `bg-theme-1-backgrounds-toggle-background text-theme-1-text-1-color`
          : currentTheme.id === "2"
          ? "bg-theme-2-backgrounds-toggle-background text-theme-2-text-2-color"
          : "bg-theme-3-backgrounds-toggle-background text-theme-3-text-1-color"
      } rounded p-3 sm:p-2 mt-2`}
    >
      <div className="grid grid-cols-4 gap-2 place-items-stretch ">
        {/* first row 3 numerical keys */}
        {firstRowNumericalKeys.map((key) => (
          <Button
            btnTxt={key}
            key={key}
            bgClr={`${
              currentTheme.id === "1"
                ? `bg-theme-1-keys-3-key-background`
                : currentTheme.id === "2"
                ? "bg-theme-2-keys-3-key-background"
                : "bg-theme-3-keys-3-key-background"
            }`}
            txtClr={`${
              currentTheme.id === "1"
                ? `text-theme-1-text-1-color`
                : currentTheme.id === "2"
                ? "text-theme-2-text-1-color"
                : "text-theme-3-text-1-color"
            }`}
            fontSize="text-xs"
            shadowClr={`${
              currentTheme.id === "1"
                ? `hsl(28, 16%, 65%)`
                : currentTheme.id === "2"
                ? "hsl(35, 11%, 61%)"
                : "hsl(290, 70%, 36%)"
            }`}
            onClickHandler={() => pushValueToMemoryHandler(key)}
          />
        ))}
        {/* first row del key */}
        <Button
          btnTxt="DEL"
          bgClr={`${
            currentTheme.id === "1"
              ? `bg-theme-1-keys-1-key-background`
              : currentTheme.id === "2"
              ? "bg-theme-2-keys-1-key-background"
              : "bg-theme-3-keys-1-key-background"
          }`}
          txtClr={`${
            currentTheme.id === "1"
              ? `text-theme-1-text-2-color`
              : currentTheme.id === "2"
              ? "text-theme-1-text-2-color"
              : "text-theme-1-text-2-color"
          }`}
          fontSize="text-xs"
          shadowClr={`${
            currentTheme.id === "1"
              ? `hsl(224, 28%, 35%)`
              : currentTheme.id === "2"
              ? "hsl(185, 58%, 25%)"
              : "hsl(285, 91%, 52%)"
          }`}
          onClickHandler={() => deleteValueFromMemoryHandler()}
        />
        {/* 2nd 3rd and 4th row */}
        {secondThirdFourthRowKeys.map((key) => (
          <Button
            btnTxt={key}
            key={key}
            bgClr={`${
              currentTheme.id === "1"
                ? `bg-theme-1-keys-3-key-background`
                : currentTheme.id === "2"
                ? "bg-theme-2-keys-3-key-background"
                : "bg-theme-3-keys-3-key-background"
            }`}
            txtClr={`${
              currentTheme.id === "1"
                ? `text-theme-1-text-1-color`
                : currentTheme.id === "2"
                ? "text-theme-2-text-1-color"
                : "text-theme-3-text-1-color"
            }`}
            fontSize="text-xs"
            shadowClr={`${
              currentTheme.id === "1"
                ? `hsl(28, 16%, 65%)`
                : currentTheme.id === "2"
                ? "hsl(35, 11%, 61%)"
                : "hsl(290, 70%, 36%)"
            }`}
            onClickHandler={() => pushValueToMemoryHandler(key)}
          />
        ))}
        {/* last row reset and = key */}
      </div>
      <div className="mt-2 grid grid-cols-2 gap-2 place-items-stretch ">
        <Button
          btnTxt="RESET"
          bgClr={`${
            currentTheme.id === "1"
              ? `bg-theme-1-keys-1-key-background`
              : currentTheme.id === "2"
              ? "bg-theme-2-keys-1-key-background"
              : "bg-theme-3-keys-1-key-background"
          }`}
          txtClr={`${
            currentTheme.id === "1"
              ? `text-theme-1-text-2-color`
              : currentTheme.id === "2"
              ? "text-theme-1-text-2-color"
              : "text-theme-1-text-2-color"
          }`}
          fontSize="text-xs"
          shadowClr={`${
            currentTheme.id === "1"
              ? `hsl(224, 28%, 35%)`
              : currentTheme.id === "2"
              ? "hsl(185, 58%, 25%)"
              : "hsl(285, 91%, 52%)"
          }`}
          onClickHandler={() => resetMemoryHandler()}
        />

        <Button
          btnTxt="="
          bgClr={`${
            currentTheme.id === "1"
              ? `bg-theme-1-keys-2-key-background`
              : currentTheme.id === "2"
              ? "bg-theme-2-keys-2-key-background"
              : "bg-theme-3-keys-2-key-background"
          }`}
          txtClr={`${
            currentTheme.id === "1"
              ? `text-theme-1-text-2-color`
              : currentTheme.id === "2"
              ? "text-theme-1-text-2-color"
              : "text-theme-1-text-2-color"
          }`}
          fontSize="text-xs"
          shadowClr={`${
            currentTheme.id === "1"
              ? `hsl(6, 70%, 34%)`
              : currentTheme.id === "2"
              ? "hsl(25, 99%, 27%)"
              : "hsl(177, 92%, 70%)"
          }`}
          onClickHandler={() => calculateValueHandler()}
        />
      </div>
    </div>
  )
}

export default Keypad
