export default class Llama {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    // size and velocity
    let minSize = 20;
    let maxSize = 120;
    this.size = Math.random() * (maxSize - minSize) + minSize;
    this.angle = Math.random() * Math.PI * 2;
    this.deltaAngle = Math.random() * 0.2 - 0.1;
    this.randomElement = Math.random();
    let minSpeed = 3;
    let maxSpeed = 15;
    let velocity = Math.random() * (maxSpeed - minSpeed) + minSpeed;
    //once you have angle and velocity, you can find deltaX and deltaY
    this.deltaX = velocity * Math.cos(this.angle);
    this.deltaY = velocity * Math.sin(this.angle);
  }

  update() {
    this.x += this.deltaX;
    this.y += this.deltaY;
    this.angle += this.deltaAngle;
    this.deltaY += 0.4;
  }

  render(ctx) {
    ctx.font = `${this.size}px serif`;
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);

    this.randomElement >= 0.5 ? ctx.scale(-1, 1) : ctx.scale(1, -1);
    this.randomElement >= 0.7
      ? (ctx.filter = `hue-rotate(${
          this.randomElement * 100
        }deg) saturate(450%) brightness(${this.randomElement})`)
      : (ctx.filter = "");
    ctx.translate(-this.x, -this.y);
    ctx.fillText("🦙", this.x, this.y);
    ctx.restore();
  }

  isAlive(canvas) {
    //kill sparkle if it moves off canvas to the right
    //return this.x + this.defaults.radius < canvas.width;
    return this.y < canvas.height + 40;
  }
}
