import React, { useState } from "react"
import styles from "./modal.module.css"
const Modal = ({ showRules, setShowRules }) => {
  return (
    <>
      {showRules && (
        <div
          className="w-full h-full fixed z-40 left-0 top-0 bg-black opacity-50"
          onClick={() => setShowRules(false)}
        ></div>
      )}
      <div
        className={styles.modal}
        style={{
          transform: showRules ? "translateY(0)" : "translateY(-100vh)",
          opacity: showRules ? "1" : "0",
        }}
      >
        <div className="mt-44 md:mt-0 grid md:grid-cols-2 px-4 py-5 gap-52 grid-row-3 md:grid-rows-1 md:gap-0">
          <p
            className="col-span-2 md:col-span-1 text-9xl md:text-4xl text-center md:text-left order-1"
            style={{ color: "hsl(229, 25%, 31%)" }}
          >
            RULES
          </p>
          <button
            className="col-span-2 md:col-span-1  flex justify-center md:justify-end md:items-center order-3 md:order-2"
            onClick={() => setShowRules(false)}
          >
            <img
              className="w-32 md:w-auto"
              src="/images/icon-close.svg"
              alt="icon-close"
            />
          </button>
          <img
            className="col-span-2 mx-auto p-6 order-2 w-3/4 md:w-auto md:order-3"
            src="/images/image-rules.svg"
            alt="image-rules"
          />
        </div>

        {/* <img
          className="mx-auto p-6 order-2 md:order-3"
          src="/images/image-rules.svg"
          alt="image-rules"
        /> */}
      </div>
    </>
  )
}

export default Modal
