// export const animationsData = [
// {
// id: 'gravityBalls',
// name: 'Gravity Balls',
// description: 'Balls bouncing with gravity & collisions',
// engine: 'matter',
// settings: {
// gravity: 1,
// restitution: 0.9,
// ballCount: 14,
// ballRadius: 18,
// color: '#6EE7B7'
// }
// },
// {
// id: 'particleExplosion',
// name: 'Particle Explosion',
// description: 'One-time outward particle blast (looping)',
// engine: 'matter',
// settings: {
// gravity: 0.12,
// particleCount: 80,
// speed: 6,
// particleRadius: 4,
// color: '#FB7185'
// }
// },
// {
// id: 'stackCollapse',
// name: 'Stack Collapse',
// description: 'Stack of blocks that collapse on touch',
// engine: 'matter',
// settings: {
// cols: 8,
// rows: 6,
// blockW: 40,
// blockH: 20,
// color: '#60A5FA'
// }
// },
// {
//     id: 'carAnimation',
//     name: 'Car Animation',
//     description: 'A car moving forward with wheels rotating',
//     engine: 'matter',
//     settings: {
//       carWidth: 120,
//       carHeight: 40,
//       wheelRadius: 20,
//       carColor: '#FBBF24',
//       wheelColor: '#374151',
//       speed: 5
//     }
//   },

// ]

export const animationsData = [
  {
    id: 'gravityBalls',
    name: 'Gravity Balls',
    description: 'Balls bouncing with gravity & collisions',
    engine: 'matter',
    settings: {
      gravity: 1,
      restitution: 0.9,
      ballCount: 14,
      ballRadius: 18,
      color: '#6EE7B7'
    }
  },
  {
    id: 'particleExplosion',
    name: 'Particle Explosion',
    description: 'One-time outward particle blast (looping)',
    engine: 'matter',
    settings: {
      gravity: 0.12,
      particleCount: 80,
      speed: 6,
      particleRadius: 4,
      color: '#FB7185'
    }
  },
  {
    id: 'stackCollapse',
    name: 'Stack Collapse',
    description: 'Stack of blocks that collapse on touch',
    engine: 'matter',
    settings: {
      cols: 8,
      rows: 6,
      blockW: 40,
      blockH: 20,
      color: '#60A5FA'
    }
  },
  {
    id: 'carAnimation',
    name: 'Car Animation',
    description: 'A car moving forward with wheels rotating',
    engine: 'matter',
    settings: {
      carWidth: 120,
      carHeight: 40,
      wheelRadius: 20,
      carColor: '#FBBF24',
      wheelColor: '#374151',
      speed: 5
    }
  },
  // 🆕 10 New Animations
  {
    id: 'pendulumSwing',
    name: 'Pendulum Swing',
    description: 'A pendulum swinging back and forth',
    engine: 'matter',
    settings: {
      length: 200,
      bobRadius: 20,
      color: '#F87171',
      amplitude: 0.04
    }
  },
  {
    id: 'dominoChain',
    name: 'Domino Chain',
    description: 'Dominoes fall one after another',
    engine: 'matter',
    settings: {
      count: 12,
      width: 20,
      height: 60,
      color: '#34D399'
    }
  },
  {
    id: 'bouncingSquares',
    name: 'Bouncing Squares',
    description: 'Squares bouncing and colliding like balls',
    engine: 'matter',
    settings: {
      count: 20,
      size: 30,
      restitution: 0.8,
      color: '#60A5FA'
    }
  },
  {
    id: 'explodingBlocks',
    name: 'Exploding Blocks',
    description: 'Blocks explode outward on collision',
    engine: 'matter',
    settings: {
      cols: 6,
      rows: 4,
      blockW: 40,
      blockH: 40,
      color: '#FBBF24',
      explosionForce: 8
    }
  },
  {
    id: 'rotatingRings',
    name: 'Rotating Rings',
    description: 'Rings rotating around a center point',
    engine: 'matter',
    settings: {
      ringCount: 5,
      radius: 100,
      color: '#A78BFA',
      speed: 0.02
    }
  },
  {
    id: 'fallingLeaves',
    name: 'Falling Leaves',
    description: 'Leaves gently falling like particles',
    engine: 'matter',
    settings: {
      leafCount: 30,
      gravity: 0.2,
      size: 15,
      color: '#FACC15'
    }
  },
  {
    id: 'springyChain',
    name: 'Springy Chain',
    description: 'Balls connected with springs bouncing around',
    engine: 'matter',
    settings: {
      ballCount: 10,
      ballRadius: 15,
      stiffness: 0.05,
      color: '#F472B6'
    }
  },
  {
    id: 'randomBalloons',
    name: 'Random Balloons',
    description: 'Balloons floating upward with slight sway',
    engine: 'matter',
    settings: {
      balloonCount: 15,
      radius: 20,
      gravity: -0.03,
      color: '#38BDF8'
    }
  },
  {
    id: 'circularOrbit',
    name: 'Circular Orbit',
    description: 'Bodies orbiting a central point in circular motion',
    engine: 'matter',
    settings: {
      bodyCount: 6,
      radius: 250,
      bodySize: 15,
      color: '#F87171',
      speed: 0.03
    }
  },
  {
    id: 'stackTower',
    name: 'Stack Tower',
    description: 'Tall tower blocks that wobble but stay upright',
    engine: 'matter',
    settings: {
      cols: 3,
      rows: 15,
      blockW: 50,
      blockH: 30,
      color: '#10B981'
    }
  },
  {
    id: "fireworks",
    name: "Realistic Fireworks",
    description: "Diwali-style fireworks with rockets and particle explosions",
    engine: "matter",
    settings: {
      rocketCount: 4,
      particleCount: 60,
      particleRadius: 3,
      rocketSpeed: 7,
      colors: ["#FFD700", "#F87171", "#34D399", "#60A5FA", "#A78BFA"],
      text: "✨ Happy Diwali ✨",
      textSize: 48,
      textColor: "#FFD700",
      gravity: 0.2,
    },
  },
];
