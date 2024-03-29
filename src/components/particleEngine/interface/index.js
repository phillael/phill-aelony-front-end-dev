import React, { useRef, useEffect } from "react";
import interfaceStyles from "./interface.module.scss";

export default function Interface({ open }) {
  // ref for canvas element
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas.getContext("2d");
    const width = (canvas.width = 255);
    const height = (canvas.height = 255);

    const delayBetweenCircles = 80,
      speed = 1.5;

    let delay = delayBetweenCircles,
      circles = [];

    requestAnimationFrame(loop);

    ////////////////////////// CIRCLES ////////////////////////////

    function createCircle() {
      // draw circles with dashes
      const dash1 = Math.floor(Math.random() * 50);
      const dash2 = dash1 + Math.floor(Math.random() * 100);
      // caps are the shape of ends of the dash
      const caps = ["round", "square", "butt"];

      // Push a randomized cirlce into circles array
      circles.push({
        radius: 1,
        dash: [dash1, dash2],
        width: Math.floor(Math.random() * 25 + 5),
        angle: Math.random() * Math.PI * 2,
        deltaAngle: (Math.random() * Math.PI * 2 - Math.PI) / 5,
        cap: caps[Math.floor(Math.random() * 3)],
      });
    }

    function drawCircle(c) {
      const color = Math.random() > 0.1 ? "lime" : "purple";

      ctx.strokeStyle = color;
      ctx.setLineDash(c.dash);
      ctx.lineWidth = c.width;
      ctx.lineCap = c.cap;
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, c.radius, c.angle, Math.PI * 2 + c.angle);
      ctx.stroke();
    }

    function drawCircles() {
      for (let c of circles) {
        drawCircle(c);
      }
    }

    function updateCircles() {
      // make circles expand outward by increasing radius
      circles = circles.filter((c) => {
        c.radius += speed;
        c.angle += c.deltaAngle;
        return c.radius < width / 2;
      });
    }

    /////////////////// LOOP ////////////////////////

    function loop() {
      // ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(0, 0, 0, .025)";
      ctx.fillRect(0, 0, width, height);
      if (delay-- <= 0) {
        createCircle();
        delay = delayBetweenCircles;
      }
      drawCircles();
      updateCircles();
      requestAnimationFrame(loop);
    }
  });

  return <canvas ref={ref} className={interfaceStyles.userInterface} />;
}
