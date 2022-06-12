export default class Molecule {
  constructor(x, y) {
    this.radius = 1;
    this.x = x;
    this.y = y;
    // colors and opacity
    this.a = 1;
    this.r = Math.floor(Math.random() * 150);
    this.g = Math.floor(Math.random() * 256);
    this.b = Math.floor(Math.random() * 150);
    // size and velocity
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
    this.a -= 0.02;
    this.radius += 0.8;
    this.x += this.deltaX;
    this.y += this.deltaY;
    this.angle += this.deltaAngle;
    // this.deltaY += 0.5
  }

  render(ctx) {
    ctx.fillStyle = `rgba(${this.r}, ${this.g}, ${this.b}, ${this.a})`;
    ctx.strokeStyle = this.g > 150 ? "purple" : "orange";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }

  isAlive(canvas) {
    //kill sparkle if it moves off canvas to the right
    //return this.x + this.defaults.radius < canvas.width;
    return this.a > 0;
  }
}
