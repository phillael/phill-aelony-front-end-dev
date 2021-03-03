export default class ParticleEngine {
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
