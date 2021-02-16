import React from "react"
import Layout from "../HOC/layout"
import {
  faTwitter,
  faFacebookSquare,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Footer = () => {
  return (
    <div className="bg-very-dark-violet-color">
      <Layout>
        <div className="flex flex-col md:flex-row justify-between ">
          <h4 className="inline-block text-white text-center md:text-left font-bold text-3xl p-8 md:p-0 md:text-xl w-auto md:w-48">
            Shortly
          </h4>
          <div className="">
            <h5 className="text-sm text-center md:text-left font-medium my-2 text-white">
              Features
            </h5>
            <p className="text-grayish-violet-color text-center md:text-left text-xs my-2 cursor-pointer hover:text-cyan-button-color">
              Link Shortening
            </p>
            <p className="text-grayish-violet-color text-center md:text-left text-xs my-2 cursor-pointer hover:text-cyan-button-color">
              Branded Links
            </p>
            <p className="text-grayish-violet-color text-center md:text-left text-xs my-2 cursor-pointer hover:text-cyan-button-color">
              Analytics
            </p>
          </div>

          <div className="">
            <h5 className="text-sm text-center md:text-left font-medium my-2 text-white">
              Resources
            </h5>
            <p className="text-grayish-violet-color text-center md:text-left text-xs my-2 cursor-pointer hover:text-cyan-button-color">
              Blog
            </p>
            <p className="text-grayish-violet-color text-center md:text-left text-xs my-2 cursor-pointer hover:text-cyan-button-color">
              Developers
            </p>
            <p className="text-grayish-violet-color text-center md:text-left text-xs my-2 cursor-pointer hover:text-cyan-button-color">
              Support
            </p>
          </div>

          <div className="">
            <h5 className="text-sm text-center md:text-left font-medium my-2 text-white">
              Company
            </h5>
            <p className="text-grayish-violet-color text-center md:text-left text-xs my-2 cursor-pointer hover:text-cyan-button-color">
              About
            </p>
            <p className="text-grayish-violet-color text-center md:text-left text-xs my-2 cursor-pointer hover:text-cyan-button-color">
              Our Team
            </p>
            <p className="text-grayish-violet-color text-center md:text-left text-xs my-2 cursor-pointer hover:text-cyan-button-color">
              Careers
            </p>
            <p className="text-grayish-violet-color text-center md:text-left text-xs my-2 cursor-pointer hover:text-cyan-button-color">
              Contact
            </p>
          </div>
          <div className="mx-auto mt-6 md:mt-2 md:mx-0">
            <div className="text-white cursor-pointer inline-block mx-2 hover:text-cyan-button-color text-xl">
              <FontAwesomeIcon icon={faFacebookSquare} />
            </div>
            <div className="text-white cursor-pointer inline-block mx-2 hover:text-cyan-button-color text-xl">
              <FontAwesomeIcon icon={faTwitter} />
            </div>
            <div className="text-white cursor-pointer inline-block mx-2 hover:text-cyan-button-color text-xl">
              <FontAwesomeIcon icon={faPinterest} />
            </div>
            <div className="text-white cursor-pointer inline-block mx-2 hover:text-cyan-button-color text-xl">
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Footer
