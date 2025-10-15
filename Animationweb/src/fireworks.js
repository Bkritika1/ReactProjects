import Matter from "matter-js";
import { useAnimation } from "../src/context/AnimationContext";

export const addFireworks = (engine, config, width, height) => {
  const { Bodies, World, Events, Body } = Matter;

  const { rocketCount = 3, particleCount = 50, particleRadius = 3, rocketSpeed = 7, colors, text, textSize = 48, textColor = "#FFD700" } = config.settings;

  const rockets = [];

  // Launch a single rocket
  const launchRocket = () => {
    const x = 50 + Math.random() * (width - 100);
    const rocket = Bodies.circle(x, height + 20, 6, { isSensor: true, render: { fillStyle: "#fff" } });
    World.add(engine.world, rocket);

    let exploded = false;

    Events.on(engine, "beforeUpdate", () => {
      if (!exploded && rocket.position.y < height / 2 + Math.random() * 50) {
        exploded = true;
        World.remove(engine.world, rocket);

        // Particle explosion
        for (let i = 0; i < particleCount; i++) {
          const angle = Math.random() * Math.PI * 2;
          const speed = Math.random() * 5 + 2;
          const color = colors[Math.floor(Math.random() * colors.length)];

          const particle = Bodies.circle(rocket.position.x, rocket.position.y, particleRadius, {
            frictionAir: 0.02,
            render: { fillStyle: color },
            isSensor: true,
          });
          Body.setVelocity(particle, { x: Math.cos(angle) * speed, y: Math.sin(angle) * speed });
          World.add(engine.world, particle);

          // Remove particle after 2s
          setTimeout(() => World.remove(engine.world, particle), 2000);
        }
      }
    });
  };

  // Launch multiple rockets every 1.2s
  const interval = setInterval(() => {
    for (let i = 0; i < rocketCount; i++) launchRocket();
  }, 1200);

  // Floating text
  const render = engine.render; // engine.render will be set in AnimationCanvas
  const ctx = render.context;
  (function drawText() {
    requestAnimationFrame(drawText);
    ctx.save();
    ctx.clearRect(0, 0, width, 100); // Clear previous text
    ctx.font = `${textSize}px sans-serif`;
    ctx.fillStyle = textColor;
    ctx.textAlign = "center";
    if (text) ctx.fillText(text, width / 2, 80);
    ctx.restore();
  })();

  // Cleanup function
  return () => clearInterval(interval);
};
