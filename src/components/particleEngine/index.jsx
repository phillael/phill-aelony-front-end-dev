import React from "react"
import { useState, useEffect, useRef } from "react"
import useWindowSize from "../../hooks/useWindowSize"
import particleStyles from "./particleEngine.module.scss"
import ParticleEngine from "./particleEngine"
import Interface from "./interface/index"
import Sprinkle from "./particles/sprinkle"
import Triangle from "./particles/triangle"
import Laser from "./particles/laser"
import Molecule from "./particles/molecule"
import Wormhole from "./particles/wormhole"
import Llama from "./particles/llama"
import Clown from "./particles/clown"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons"

let particles = {
    Sprinkles(x, y) {
      return new Sprinkle(x, y)
    },
    Triangles(x, y) {
      return new Triangle(x, y)
    },
    Lasers(x, y) {
      return new Laser(x, y)
    },
    Molecules(x, y) {
      return new Molecule(x, y)
    },
    Wormholes(x, y) {
      return new Wormhole(x, y)
    },
    Llamas(x, y) {
      return new Llama(x, y)
    },
    Clowns(x, y) {
      return new Clown(x, y)
    },
  },
  quantities = {
    Sprinkles: 25,
    Triangles: 5,
    Lasers: 50,
    Molecules: 10,
    Wormholes: 10,
    Llamas: 1,
    Clowns: 1,
  }

const ParticleEngineComponent = () => {
  const [currentParticle, setCurrentParticle] = useState("Triangles")
  const [currIndex, setCurrIndex] = useState(2)
  const iconSize = 70
  const particleArray = [
    "Sprinkles",
    "Wormholes",
    "Molecules",
    "Triangles",
    "Llamas",
    "Lasers",
    "Clowns",
  ]
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const size = useWindowSize()

  useEffect(() => {
    const canvas = ref.current
    canvas.width = size.width
    canvas.height = size.height

    const pEngine = new ParticleEngine(canvas)

    canvas.addEventListener("mousedown", handleMousedown)

    function handleMousemove(e) {
      let numberOfParticles = quantities[currentParticle]
      for (let i = 0; i < numberOfParticles; i++) {
        let p = particles[currentParticle](e.clientX, e.clientY)
        pEngine.addParticle(p)
      }

      pEngine.startAnimation()
    }

    function handleMousedown(e) {
      canvas.removeEventListener("mousedown", handleMousedown)
      canvas.addEventListener("mousemove", handleMousemove)
      canvas.addEventListener("mouseup", handleMouseup)
      handleMousemove(e)
    }

    function handleMouseup(e) {
      canvas.removeEventListener("mousemove", handleMousemove)
      canvas.removeEventListener("mouseup", handleMouseup)
      canvas.addEventListener("mousedown", handleMousedown)
    }

    return () => {
      canvas.removeEventListener("mousedown", handleMousedown)
      canvas.removeEventListener("mousemove", handleMousemove)
      canvas.removeEventListener("mouseup", handleMouseup)
    }
  }, [currentParticle, size])

  return (
    <div className={particleStyles.particleEngine}>
      <canvas className={particleStyles.canvas} ref={ref} />

      <div
        className={particleStyles.launcher}
        onClick={() => setOpen(!open)}
      ></div>
      <div
        className={`${particleStyles.interfaceWrapper} ${
          open && particleStyles.open
        }`}
      >
        <button
          onClick={() => setOpen(!open)}
          className={particleStyles.closeButton}
        >
          &#10005;
        </button>
        <div
          className={`${particleStyles.interface} ${
            open && particleStyles.open
          }`}
        >
          {currIndex > 0 ? (
            <div className={`${particleStyles.arrow} ${particleStyles.left}`}>
              <FontAwesomeIcon
                icon={faChevronLeft}
                onClick={() => setCurrIndex(curr => curr - 1)}
              />
            </div>
          ) : null}

          {currIndex < 4 ? (
            <div className={`${particleStyles.arrow} ${particleStyles.right}`}>
              <FontAwesomeIcon
                icon={faChevronRight}
                onClick={() => setCurrIndex(curr => curr + 1)}
              />
            </div>
          ) : null}
          <Interface open={open} />
          <div className={particleStyles.carousel}>
            <div
              style={{ left: iconSize * -currIndex }}
              className={particleStyles.slider}
            >
              {particleArray.map(particle => {
                return (
                  <img
                    key={particle}
                    src={`/images/${particle}.png?auto=format`}
                    alt={particle}
                    className={`${open && particleStyles.open} ${
                      currentParticle === particle
                        ? particleStyles.active
                        : null
                    }`}
                    onClick={() => setCurrentParticle(particle)}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ParticleEngineComponent
