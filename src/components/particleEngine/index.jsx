import React from "react"
import { useEffect } from "react"
import { useRef } from "react"
import particleStyles from "./particleEngine.module.scss"

const ParticleEngineComponent = () => {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    const pEngine = new ParticleEngine(canvas)

    console.log("created particle engine")
    canvas.addEventListener("mousedown", handleMousedown)
    // window.addEventListener("scroll", resizeCanvas)
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    function handleMousemove(e) {
      let numberOfSparkles = 45
      for (let i = 0; i < numberOfSparkles; i++) {
        let sparkle = new Sparkle(e.clientX, e.clientY)
        pEngine.addParticle(sparkle)
      }

      pEngine.startAnimation()
      // console.log("started animation")
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
  }, [])

  return <canvas className={particleStyles.canvas} ref={ref} />
}

export default ParticleEngineComponent

class ParticleEngine {
  constructor(canvas) {
    this.canvas = canvas
    this.ctx = canvas.getContext("2d")
    this.particles = []
    this.isAnimating = false
  }
  addParticle(p) {
    this.particles.push(p)
  }

  startAnimation() {
    if (this.isAnimating) return
    this.isAnimating = true
    requestAnimationFrame(() => this.animate())
  }
  stopAnimation() {
    this.isAnimating = false
  }
  animate(t) {
    /*TODO: framerate */
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    //draw & update each particle from oldest to newest
    for (let p of this.particles) {
      p.render(this.ctx)
      p.update()
    }
    //filter out dead particles from newest to oldest
    for (let i = this.particles.length - 1; i >= 0; i--) {
      let p = this.particles[i]
      if (!p.isAlive(this.canvas)) {
        this.particles.splice(i, 1) //remove 1 particle at index i
      }
    }
    //are there any more particles?
    if (!this.particles.length) {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
      this.isAnimating = false
    }
    //repeat animation loop
    if (this.isAnimating) {
      requestAnimationFrame(() => this.animate())
    }
  }
}

class Sparkle {
  constructor(x, y) {
    this.radius = 5
    this.x = x
    this.y = y
    this.a = 1
    this.r = Math.floor(Math.random() * 256)
    this.g = Math.floor(Math.random() * 256)
    this.b = Math.floor(Math.random() * 256)
    let angle = Math.random() * Math.PI * 2
    let minSpeed = 4
    let maxSpeed = 10
    let velocity = Math.random() * (maxSpeed - minSpeed) + minSpeed
    //once you have angle and velocity, you can find deltaX and deltaY
    this.deltaX = velocity * Math.cos(angle)
    this.deltaY = velocity * Math.sin(angle)
  }

  update() {
    this.a -= 0.02
    this.x += this.deltaX
    this.y += this.deltaY
    this.deltaY += 0.5
  }
  render(ctx) {
    ctx.fillStyle = `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fill()
  }
  isAlive(canvas) {
    //kill sparkle if it moves off canvas to the right
    //return this.x + this.defaults.radius < canvas.width;
    return this.a > 0
  }
}
