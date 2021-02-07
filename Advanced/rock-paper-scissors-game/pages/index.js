import Head from "next/head"
import ScoreBoard from "../components/scoreBoard"
import Button from "../components/button"
import { useState, useRef } from "react"
import Modal from "../components/modal/modal"
import PickShape from "../components/pickShape"
import ChosenShape from "../components/chosenShape"
export default function Home() {
  const circleDimensions = { width: 56, height: 56 }
  const shapeDimensions = { width: 20, height: 24 }

  const allShapes = [
    {
      _id: 1,
      shapeImage: "images/icon-paper.svg",
      shapeName: "paperImage",
      shapeShadowDark: "#2945c3",
      shapeGradientColor1: "hsl(230, 89%, 62%)",
      shapeGradientColor2: "hsl(230, 89%, 65%)",
      circleDimensions: circleDimensions,
      shapeDimensions: shapeDimensions,
    },

    {
      _id: 2,
      shapeImage: "images/icon-scissors.svg",
      shapeName: "scissorsImage",
      shapeShadowDark: "#c76c1d",
      shapeGradientColor1: "hsl(39, 89%, 49%)",
      shapeGradientColor2: "hsl(40, 84%, 53%)",
      circleDimensions: circleDimensions,
      shapeDimensions: shapeDimensions,
    },

    {
      _id: 3,
      shapeImage: "images/icon-rock.svg",
      shapeName: "rockImage",
      shapeShadowDark: "hsl(349, 71%, 41%)",
      shapeGradientColor1: "hsl(349, 71%, 52%)",
      shapeGradientColor2: "hsl(349, 70%, 56%)",
      circleDimensions: circleDimensions,
      shapeDimensions: shapeDimensions,
    },
  ]

  const [showRules, setShowRules] = useState(true)
  const [showSystemCard, setShowSystemCard] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [shapeSelected, setShapeSelected] = useState(false)
  const [userChosenShapeData, setUserChosenShapeData] = useState([])
  const systemChosenShapeData = useRef()
  const userScores = useRef(0)

  // const [userScores, setUserScores] = useState(0)

  console.log("page rendered")

  const shapeSelectionHandler = (id) => {
    setShapeSelected(true)
    let chosenShape = allShapes.filter(function (shape) {
      return shape._id === id
    })

    setUserChosenShapeData(chosenShape)

    let randomNumber = Math.floor(Math.random() * 3)

    systemChosenShapeData.current = allShapes[randomNumber]

    setTimeout(() => {
      setShowSystemCard(true)

      if (id === 2 && randomNumber + 1 === 1) {
        userScores.current = userScores.current + 1
      } else if (id === 3 && randomNumber + 1 === 2) {
        userScores.current = userScores.current + 1
      } else if (id === 1 && randomNumber + 1 === 3) {
        userScores.current = userScores.current + 1
      } else if (id === randomNumber + 1) {
        // condition for draw
      } else {
        if (userScores.current > 0) {
          userScores.current = userScores.current - 1
        }
      }

      setTimeout(() => {
        setShowResult(true)
      }, 1500)
    }, 1500)
  }
  return (
    <>
      <Head>
        <title>Rock Paper Scissors</title>
        <link rel="icon" href="/images/favicon-32x32.png" />
      </Head>

      <div className="grid ">
        <div className="p-14 md:p-0">
          <ScoreBoard userScores={userScores.current} />
        </div>
      </div>

      <div>
        {!shapeSelected ? (
          <PickShape
            allShapes={allShapes}
            setSelectedShapeId={shapeSelectionHandler}
          />
        ) : (
          <div
            className="mx-auto flex justify-center"
            style={{ width: "80rem" }}
          >
            <ChosenShape
              userChosenShapeData={userChosenShapeData[0]}
              setUserChosenShapeData={setUserChosenShapeData}
              systemChosenShapeData={systemChosenShapeData.current}
              setShapeSelected={setShapeSelected}
              showResult={showResult}
              setShowResult={setShowResult}
              showSystemCard={showSystemCard}
              setShowSystemCard={setShowSystemCard}
            />
          </div>
        )}
      </div>
      <div className="fixed bottom-10 right-10 w-full">
        <div className="flex justify-center ml-32 md:ml-0 md:justify-end">
          <Button buttonName="RULES" onClick={() => setShowRules(true)} />
        </div>
      </div>
      <div className={`${showRules ? "inline-block" : "hidden"}`}>
        <Modal showRules={showRules} setShowRules={setShowRules} />
      </div>
    </>
  )
}
