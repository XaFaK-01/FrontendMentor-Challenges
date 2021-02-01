// import styles from "../styles/Home.module.css"
import NumberCard from "../components/numberCard/NumberCard"
import { useEffect, useState } from "react"

const Home = () => {
  const [time, setTime] = useState(Date.now())
  const [futureTime, setFutureTime] = useState()

  var currentTime = new Date().getTime()
  var remainingTime = futureTime - currentTime

  var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24))
  var hours = Math.floor(
    (remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60))
  var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000)

  useEffect(() => {
    const interval = setInterval(() => setTime(Date.now()), 1000)

    let futureDays = 8
    setFutureTime(
      new Date(
        new Date().getTime() + futureDays * 24 * 60 * 60 * 1000
      ).getTime()
    )
    return () => {
      clearInterval(interval)
    }
  }, [])
  return (
    <div className="">
      <div
        className="mx-auto w-screen"
        style={{
          backgroundImage:
            "url(/images/bg-stars.svg), linear-gradient( hsl(235, 16%, 14%),hsl(234, 17%, 12%))",
          backgroundSize: "100%",
        }}
      >
        <p
          className="text-center text-2xl font-bold px-24 pt-24"
          style={{ color: "hsl(0, 0%, 100%)", letterSpacing: ".5rem" }}
        >
          WE'RE LAUNCHING SOON
        </p>
        <div className="flex justify-center mx-auto space-x-9 py-20 px-5 md:p-20 ">
          <NumberCard cardName="DAYS" cardValue={days} />
          <NumberCard cardName="HOURS" cardValue={hours} />
          <NumberCard cardName="MINUTES" cardValue={minutes} />
          <NumberCard cardName="SECONDS" cardValue={seconds} />
        </div>
        <div className="flex z-10 fixed justify-center space-x-8 bottom-16 w-full">
          <img
            className="w-7 mb-5"
            src="images/icon-facebook.svg"
            alt="icon-facebook"
          />
          <img
            className="w-7 mb-5"
            src="images/icon-pinterest.svg"
            alt="icon-pinterest"
          />
          <img
            className="w-7 mb-5"
            src="images/icon-instagram.svg"
            alt="icon-instagram"
          />
        </div>
        <img
          className="fixed z-0 bottom-0 w-screen"
          src="images/pattern-hills.svg"
          alt="pattern-hills"
        />
      </div>
    </div>
  )
}

export default Home
