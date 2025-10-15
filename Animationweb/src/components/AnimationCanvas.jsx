import React, { useEffect, useRef } from "react";
import Matter from "matter-js";
import { useAnimation } from "../context/AnimationContext";
import { addFireworks } from "../fireworks";

export default function AnimationCanvas({ config }) {
  const mountRef = useRef(null);
  const engineRef = useRef(null);
  const renderRef = useRef(null);
  const { speed } = useAnimation();

  useEffect(() => {
    if (!config) return;

    const Engine = Matter.Engine;
    const Render = Matter.Render;
    const Runner = Matter.Runner;
    const World = Matter.World;
    const Bodies = Matter.Bodies;
    const Mouse = Matter.Mouse;
    const MouseConstraint = Matter.MouseConstraint;

    // Create engine
    const engine = Engine.create();
    engineRef.current = engine;

    const width = Math.min(1000, window.innerWidth - 40);
    const height = Math.min(700, window.innerHeight - 160);

    // Create renderer
    const render = Render.create({
      element: mountRef.current,
      engine: engine,
      options: {
        width,
        height,
        wireframes: false,
        background: "#0f172a",
      },
    });
    renderRef.current = render;

    // Apply gravity
    engine.world.gravity.y = config.settings.gravity ?? 0;

    // Boundaries
    const borderThickness = 50;
    const ground = Bodies.rectangle(
      width / 2,
      height + borderThickness / 2,
      width + 2 * borderThickness,
      borderThickness,
      { isStatic: true, render: { fillStyle: "#111827" } }
    );
    const left = Bodies.rectangle(
      -borderThickness / 2,
      height / 2,
      borderThickness,
      height,
      { isStatic: true }
    );
    const right = Bodies.rectangle(
      width + borderThickness / 2,
      height / 2,
      borderThickness,
      height,
      { isStatic: true }
    );
    const ceiling = Bodies.rectangle(
      width / 2,
      -borderThickness / 2,
      width,
      borderThickness,
      { isStatic: true }
    );

    World.add(engine.world, [ground, left, right, ceiling]);

    // 🎯 1️⃣ Gravity Balls
    const addGravityBalls = () => {
      const cnt = config.settings.ballCount || 12;
      const r = config.settings.ballRadius || 12;
      const restitution = config.settings.restitution ?? 0.9;
      const color = config.settings.color || "#FDE68A";
      const bodies = [];

      for (let i = 0; i < cnt; i++) {
        const circle = Bodies.circle(
          100 + Math.random() * (width - 200),
          40 + Math.random() * 200,
          r,
          {
            restitution,
            friction: 0.001,
            render: { fillStyle: color },
          }
        );
        bodies.push(circle);
      }

      World.add(engine.world, bodies);
    };
// 🚗 4️⃣ Car Animation
const addCarAnimation = () => {
  const { carWidth, carHeight, wheelRadius, carColor, wheelColor, speed } = config.settings;

  const startX = 150;
  const startY = height - 100;

  // Car body
  const car = Bodies.rectangle(startX, startY - wheelRadius, carWidth, carHeight, {
    friction: 0.001,
    restitution: 0.1,
    render: { fillStyle: carColor },
  });

  // Wheels
  const wheelA = Bodies.circle(startX - carWidth / 2 + wheelRadius, startY, wheelRadius, {
    friction: 0.8,
    restitution: 0.2,
    render: { fillStyle: wheelColor },
  });

  const wheelB = Bodies.circle(startX + carWidth / 2 - wheelRadius, startY, wheelRadius, {
    friction: 0.8,
    restitution: 0.2,
    render: { fillStyle: wheelColor },
  });

  // Constraints to attach wheels to car
  const constraintA = Matter.Constraint.create({
    bodyA: car,
    pointA: { x: -carWidth / 2 + wheelRadius, y: carHeight / 2 },
    bodyB: wheelA,
    length: 0,
    stiffness: 1,
  });

  const constraintB = Matter.Constraint.create({
    bodyA: car,
    pointA: { x: carWidth / 2 - wheelRadius, y: carHeight / 2 },
    bodyB: wheelB,
    length: 0,
    stiffness: 1,
  });

  World.add(engine.world, [car, wheelA, wheelB, constraintA, constraintB]);

  // Move car forward continuously
  Matter.Events.on(engine, 'beforeUpdate', () => {
    Matter.Body.setVelocity(car, { x: speed, y: car.velocity.y });
    Matter.Body.setAngularVelocity(wheelA, speed / 10);
    Matter.Body.setAngularVelocity(wheelB, speed / 10);
  });
};

    // 🎆 2️⃣ Particle Explosion
    const addParticleExplosion = () => {
      const cnt = config.settings.particleCount || 60;
      const r = config.settings.particleRadius || 3;
      const color = config.settings.color || "#FCA5A5";
      const speed = config.settings.speed || 4;
      const centerX = width / 2;
      const centerY = height / 2;
      const bodies = [];

      for (let i = 0; i < cnt; i++) {
        const angle = Math.random() * Math.PI * 2;
        const vx = Math.cos(angle) * (Math.random() * speed);
        const vy = Math.sin(angle) * (Math.random() * speed);
        const b = Bodies.circle(
          centerX + (Math.random() * 10 - 5),
          centerY + (Math.random() * 10 - 5),
          r,
          {
            restitution: 0.6,
            friction: 0,
            render: { fillStyle: color },
          }
        );
        Matter.Body.setVelocity(b, { x: vx, y: vy });
        bodies.push(b);
      }

      World.add(engine.world, bodies);

      // Remove old particles to keep world light
      setTimeout(() => {
        World.remove(engine.world, bodies);
      }, 4000);
    };

    // 🆕 10 New Animations Functions

// 1️⃣ Pendulum Swing
const addPendulumSwing = () => {
  const { length, bobRadius, color } = config.settings;
  const pivot = Bodies.rectangle(width/2, 100, 10, 10, { isStatic: true });
  const bob = Bodies.circle(width/2 + length, 100 + length, bobRadius, {
    restitution: 0.9,
    render: { fillStyle: color }
  });
  const constraint = Matter.Constraint.create({
    bodyA: pivot,
    bodyB: bob,
    length,
    stiffness: 1
  });
  World.add(engine.world, [pivot, bob, constraint]);
};

// 2️⃣ Domino Chain
const addDominoChain = () => {
  const { count, width: w, height: h, color } = config.settings;
  const startX = 100;
  const startY = height - 50;
  const dominoes = [];
  for (let i = 0; i < count; i++) {
    const domino = Bodies.rectangle(startX + i*(w+5), startY - h/2, w, h, {
      restitution: 0.1,
      friction: 0.3,
      density: 0.002,
      render: { fillStyle: color }
    });
    dominoes.push(domino);
  }
  World.add(engine.world, dominoes);
};

// 3️⃣ Bouncing Squares
const addBouncingSquares = () => {
  const { count, size, restitution, color } = config.settings;
  const squares = [];
  for (let i = 0; i < count; i++) {
    const sq = Bodies.rectangle(
      50 + Math.random() * (width-100),
      50 + Math.random() * 200,
      size,
      size,
      { restitution, friction: 0.001, render: { fillStyle: color } }
    );
    squares.push(sq);
  }
  World.add(engine.world, squares);
};

// 4️⃣ Exploding Blocks
const addExplodingBlocks = () => {
  const { cols, rows, blockW, blockH, color, explosionForce } = config.settings;
  const blocks = [];
  const startX = width/2 - (cols*blockW)/2;
  const startY = height/2 - (rows*blockH)/2;
  for(let r=0; r<rows; r++){
    for(let c=0; c<cols; c++){
      const b = Bodies.rectangle(startX + c*blockW + blockW/2, startY + r*blockH + blockH/2, blockW-2, blockH-2, {
        restitution:0.1, friction:0.3, render:{fillStyle: color}
      });
      blocks.push(b);
    }
  }
  World.add(engine.world, blocks);
  // Apply explosion after 1s
  setTimeout(() => {
    blocks.forEach(b => {
      Matter.Body.applyForce(b, b.position, {
        x: (Math.random()-0.5)*explosionForce,
        y: (Math.random()-0.5)*explosionForce
      });
    });
  }, 1000);
};

// 5️⃣ Rotating Rings
const addRotatingRings = () => {
  const { ringCount, radius, color, speed } = config.settings;
  const centerX = width/2, centerY = height/2;
  const bodies = [];
  for(let i=0;i<ringCount;i++){
    const angle = (i/ringCount)*Math.PI*2;
    const x = centerX + Math.cos(angle)*radius;
    const y = centerY + Math.sin(angle)*radius;
    const b = Bodies.circle(x, y, 15, { restitution:0.8, render:{fillStyle: color} });
    bodies.push(b);
  }
  World.add(engine.world, bodies);
  Matter.Events.on(engine, 'beforeUpdate', () => {
    bodies.forEach((b, idx)=>{
      const angle = Date.now()*0.001*speed + (idx/bodies.length)*Math.PI*2;
      Matter.Body.setPosition(b, { x:centerX + Math.cos(angle)*radius, y:centerY + Math.sin(angle)*radius });
    });
  });
};

// 6️⃣ Falling Leaves
const addFallingLeaves = () => {
  const { leafCount, size, color, gravity } = config.settings;
  const leaves = [];
  for(let i=0;i<leafCount;i++){
    const leaf = Bodies.circle(Math.random()*width, Math.random()*-height, size, {
      restitution:0.5, friction:0.001, render:{fillStyle: color}
    });
    leaves.push(leaf);
  }
  World.add(engine.world, leaves);
  engine.world.gravity.y = gravity;
};

// 7️⃣ Springy Chain
const addSpringyChain = () => {
  const { ballCount, ballRadius, stiffness, color } = config.settings;
  const balls = [];
  const constraints = [];
  for(let i=0;i<ballCount;i++){
    const ball = Bodies.circle(width/2, 50 + i*(ballRadius*2), ballRadius, { restitution:0.5, friction:0.001, render:{fillStyle: color} });
    balls.push(ball);
    if(i>0){
      constraints.push(Matter.Constraint.create({
        bodyA: balls[i-1],
        bodyB: ball,
        length: ballRadius*2,
        stiffness
      }));
    }
  }
  World.add(engine.world, [...balls,...constraints]);
};

// 8️⃣ Random Balloons
const addRandomBalloons = () => {
  const { balloonCount, radius, gravity, color } = config.settings;
  const balloons = [];
  for(let i=0;i<balloonCount;i++){
    const b = Bodies.circle(Math.random()*width, height+Math.random()*200, radius, {
      restitution:0.5, friction:0.001, render:{fillStyle: color}
    });
    balloons.push(b);
  }
  World.add(engine.world, balloons);
  engine.world.gravity.y = gravity; // negative for upward float
};

// 9️⃣ Circular Orbit
const addCircularOrbit = () => {
  const { bodyCount, radius, bodySize, color, speed } = config.settings;
  const centerX = width/2, centerY = height/2;
  const bodies = [];
  for(let i=0;i<bodyCount;i++){
    const angle = (i/bodyCount)*Math.PI*2;
    const x = centerX + Math.cos(angle)*radius;
    const y = centerY + Math.sin(angle)*radius;
    const b = Bodies.circle(x, y, bodySize, { restitution:0.8, friction:0.001, render:{fillStyle: color} });
    bodies.push(b);
  }
  World.add(engine.world, bodies);
  Matter.Events.on(engine, 'beforeUpdate', () => {
    bodies.forEach((b, idx)=>{
      const angle = Date.now()*0.001*speed + (idx/bodies.length)*Math.PI*2;
      Matter.Body.setPosition(b, { x:centerX + Math.cos(angle)*radius, y:centerY + Math.sin(angle)*radius });
    });
  });
};

// 🔟 Stack Tower
const addStackTower = () => {
  const { cols, rows, blockW, blockH, color } = config.settings;
  const stack = [];
  const startX = width/2 - (cols*blockW)/2;
  const startY = height - 50 - rows*blockH;
  for(let r=0;r<rows;r++){
    for(let c=0;c<cols;c++){
      const b = Bodies.rectangle(startX + c*blockW + blockW/2, startY - r*blockH, blockW-2, blockH-2, {
        restitution:0.1, friction:0.3, render:{fillStyle: color}
      });
      stack.push(b);
    }
  }
  World.add(engine.world, stack);
};

    // 🧱 3️⃣ Stack Collapse
    const addStackCollapse = () => {
      const cols = config.settings.cols || 6;
      const rows = config.settings.rows || 5;
      const bw = config.settings.blockW || 40;
      const bh = config.settings.blockH || 20;
      const color = config.settings.color || "#60A5FA";
      const stack = [];
      const startX = width / 2 - (cols * bw) / 2;
      const startY = height - 100 - rows * bh;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = startX + c * bw + bw / 2;
          const y = startY + r * bh + bh / 2;
          const block = Bodies.rectangle(x, y, bw - 2, bh - 2, {
            restitution: 0.1,
            friction: 0.3,
            density: 0.002,
            render: { fillStyle: color },
          });
          stack.push(block);
        }
      }

      World.add(engine.world, stack);
    };

    // 🧭 Choose animation route
    if (config.id === "gravityBalls") addGravityBalls();
    if (config.id === "particleExplosion")
      setInterval(addParticleExplosion, 900);
    if (config.id === "stackCollapse") addStackCollapse();
    if (config.id === "carAnimation") addCarAnimation(); 
    if (config.id === "pendulumSwing") addPendulumSwing();
if (config.id === "dominoChain") addDominoChain();
if (config.id === "bouncingSquares") addBouncingSquares();
if (config.id === "explodingBlocks") addExplodingBlocks();
if (config.id === "rotatingRings") addRotatingRings();
if (config.id === "fallingLeaves") addFallingLeaves();
if (config.id === "springyChain") addSpringyChain();
if (config.id === "randomBalloons") addRandomBalloons();
if (config.id === "circularOrbit") addCircularOrbit();
if (config.id === "stackTower") addStackTower();
if (config.id === "fireworks") {
  const cleanupFireworks = addFireworks(engine, render, config, width, height);
  cleanupFunctions.push(cleanupFireworks);
}

    // 🖱️ Mouse control
    const mouse = Mouse.create(render.canvas);
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse,
      constraint: { stiffness: 0.2, render: { visible: false } },
    });
    World.add(engine.world, mouseConstraint);
    render.mouse = mouse;

    // Run engine + renderer
    Engine.run(engine);
    Render.run(render);

    // 🧹 Cleanup on unmount
    return () => {
      Render.stop(render);
      World.clear(engine.world, false);
      Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
    };
  }, [config]);

  // 🕹️ Update speed dynamically
  useEffect(() => {
    if (engineRef.current) engineRef.current.timing.timeScale = speed;
  }, [speed]);

  return (
    <div className="canvas-wrapper">
      <div ref={mountRef} />
    </div>
  );
}
