export default class Laser {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    // colors and opacity
    this.a = 1;
    this.r = Math.floor(Math.random() * 256);
    this.g = 0;
    this.b = 0;
    // size and velocity
    let minSize = 0.5;
    let maxSize = 1;
    this.size = Math.random() * (maxSize - minSize) + minSize;
    this.angle = Math.random() * Math.PI * 2;
    this.deltaAngle = Math.random() * 0.5 - 0.25;
    let minSpeed = 4;
    let maxSpeed = 10;
    let velocity = Math.random() * (maxSpeed - minSpeed) + minSpeed;
    //once you have angle and velocity, you can find deltaX and deltaY
    this.deltaX = velocity * Math.cos(this.angle);
    this.deltaY = velocity * Math.sin(this.angle);
  }

  update() {
    this.a -= 0.1;
    this.size += 1.5;
    // this.x += this.deltaX
    // this.y += this.deltaY
    this.angle += this.deltaAngle;
    // this.deltaY -= 0.5
  }
  render(ctx) {
    ctx.fillStyle = `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(this.size, this.size);
    ctx.lineTo(-this.size, this.size * 10);
    ctx.fill();
    ctx.restore();
  }

  isAlive(canvas) {
    //kill sparkle if it moves off canvas to the right
    //return this.x + this.defaults.radius < canvas.width;
    return this.a > 0;
  }
}
