
const baseTheme = {
  '--font-family': "'Poppins', sans-serif",
  '--font-size-heading': '2rem',
  '--font-size-body': '1rem',
  '--border-radius': '12px',
  '--animation-speed': '0.3s',
  '--border-style': '1px solid #ddd',
  '--gradient-text': 'linear-gradient(to top right, var(--color-primary), var(--color-secondary), var(--color-accent))',
  '--box-shadow-card-heavy': ' 8px 8px 10px rgb(0 0 0 / 29%)',
  '--text-shadow': '1px 1px 2px rgba(0,0,0,0.1)',
    '--blob-bg': 'linear-gradient(135deg, var(--color-primary))',
    '--blob-border-radius': '50% 50% 40% 60%',
    '--blob-blur': 'blur(85px)',
    '--blob-opacity': '0.65',
    '--blob-rotate': 'rotate(20deg)',
    '--blob-x': '-60px',
    '--blob-y': '-50px',
    '--blob-scale': 'scale(1.2)',
    '--blob-transition': 'all 1.4s ease-in-out',
    '--gradient-text-animation': 'moveGradient 3s linear infinite',
    '--glass-bg': 'rgba(255, 255, 255, 0.2)',
    '--glass-border': '1px solid rgba(255,255,255,0.3)',
    '--glass-blur': 'blur(8px)',

}




  export const themeData = {
      light2: {
        ...baseTheme,
         themeName: "pastel",
    '--color-bg': '#f8f3f5',
    '--color-text': '#120409',
    '--color-primary': ' #781d42',
    '--color-accent':'#f59e0b',
    '--color-secondary': '#a3423c',
    '--box-shadow-card': '0 4px 12px rgba(0,0,0,0.1)',
    '--box-shadow-card-heavy': ' 8px 8px 10px rgb(0 0 0 / 29%)',
    '--border-style': '1px solid #ddd',
  },





  light: {
       ...baseTheme,
         themeName: "pastel",
    '--color-bg': '#f9fafb',
    '--color-text': '#1f2937',
    '--color-primary': '#4f46e5',
    '--color-secondary': '#10b981',
    '--color-accent':'#f43f5e',
    '--font-family': "'Poppins', sans-serif",
    '--font-size-heading': '2rem',
    '--font-size-body': '1rem',
    '--box-shadow-card': '0 4px 12px rgba(0,0,0,0.1)',
     '--box-shadow-card-heavy': ' 8px 8px 10px rgb(0 0 0 / 29%)',
    '--animation-speed': '0.3s',
    '--border-style': '1px solid #ddd',
   
    '--card-bg-gradient': 'linear-gradient(135deg, #4f46e5 0%, #10b981 100%)',
  },
dark: {
   ...baseTheme,
         themeName: "warm",
    '--color-bg': '#1f2937',
    '--color-text': '#f9fafb',
    '--color-primary': '#6366f1',
    '--color-secondary': '#22c55e',
    '--color-accent': '#f59e0b', 
    '--box-shadow-card': '0 4px 12px rgba(255,255,255,0.1)',
    '--box-shadow-card-heavy': '8px 8px 10px rgb(0 0 0 / 29%)',
    '--border-style': '1px solid #444',
      '--card-bg-gradient': 'linear-gradient(135deg, #333333 0%, #444444 100%)',
},

cyberpunk: {
   ...baseTheme,
         themeName: "happy",
    '--color-bg': '#0f0f1a',
    '--color-text': '#e0e0ff',
    '--color-primary': '#ff00ff',
    '--color-secondary': '#00ffff',
    '--color-accent': '#ffea00', // bright yellow for cyberpunk vibe
    '--box-shadow-card': '0 6px 20px rgba(255, 0, 255, 0.4)',
    '--box-shadow-card-heavy': ' 8px 8px 10px rgb(0 0 0 / 29%)',
    '--card-bg-gradient': 'linear-gradient(135deg, #ff00ff 0%, #00ffff 100%)',
},

pastel: {
    ...baseTheme,
         themeName: "warm",
    '--color-bg': '#fdf6f0',
    '--color-text': '#333333',
    '--color-primary': '#ff6f61',
    '--color-secondary': '#6b5b95',
    '--color-accent': '#ffb347', // soft orange/yellow

    '--box-shadow-card': '0 4px 16px rgba(255,111,97,0.2)',
    '--box-shadow-card-heavy': '8px 8px 10px rgb(0 0 0 / 29%)',
    '--border-style': '1px solid #ff6f61',
    '--text-shadow': '1px 1px 3px rgba(0,0,0,0.1)',
    '--card-bg-gradient': 'linear-gradient(135deg, #ff6f61 0%, #6b5b95 100%)',
},

ocean: {
    '--color-bg': '#e0f7fa',
    '--color-text': '#006064',
    '--color-primary': '#00acc1',
    '--color-secondary': '#00838f',
    '--color-accent': '#00e5ff', // bright cyan accent
    '--font-family': "'Poppins', sans-serif",
    '--font-size-heading': '2rem',
    '--font-size-body': '1rem',
    '--border-radius': '12px',
    '--box-shadow-card': '0 4px 12px rgba(0,172,193,0.3)',
    '--box-shadow-card-heavy': '8px 8px 10px rgb(0 0 0 / 29%)',
    '--animation-speed': '0.3s',
    '--border-style': '1px solid #00acc1',
    '--text-shadow': '1px 1px 3px rgba(0,172,193,0.3)',
    '--glass-bg': 'rgba(255,255,255,0.3)',
    '--glass-border': '1px solid rgba(255,255,255,0.5)',
    '--glass-blur': 'blur(10px)',
    '--blob-bg': 'linear-gradient(135deg, #00acc1, #00838f)',
    '--blob-border-radius': '50% 40% 60% 50%',
    '--blob-blur': 'blur(90px)',
    '--blob-opacity': '0.7',
    '--blob-rotate': 'rotate(10deg)',
    '--blob-x': '-50px',
    '--blob-y': '-30px',
    '--blob-scale': 'scale(1.2)',
    '--blob-transition': 'all 1.3s ease-in-out',
    '--gradient-text': 'linear-gradient(to top right, var(--color-primary), var(--color-secondary), var(--color-accent))',
    '--gradient-text-animation': 'moveGradient 3s linear infinite',
    '--card-bg-gradient': 'linear-gradient(135deg, #00acc1 0%, #00838f 100%)',
},

sunset: {
    '--color-bg': '#ffefd5',
    '--color-text': '#5a3e36',
    '--color-primary': '#ff6f61',
    '--color-secondary': '#ffb347',
    '--color-accent': '#ff3f34', // bright coral/red
    '--font-family': "'Poppins', sans-serif",
    '--font-size-heading': '2rem',
    '--font-size-body': '1rem',
    '--border-radius': '12px',
    '--box-shadow-card': '0 4px 12px rgba(255,111,97,0.3)',
    '--box-shadow-card-heavy': '8px 8px 10px rgb(0 0 0 / 29%)',
    '--animation-speed': '0.3s',
    '--border-style': '1px solid #ff6f61',
    '--text-shadow': '1px 1px 3px rgba(255,111,97,0.4)',
    '--glass-bg': 'rgba(255,255,255,0.25)',
    '--glass-border': '1px solid rgba(255,255,255,0.5)',
    '--glass-blur': 'blur(10px)',
    '--blob-bg': 'linear-gradient(135deg, #ff6f61, #ffb347)',
    '--blob-border-radius': '60% 40% 50% 60%',
    '--blob-blur': 'blur(90px)',
    '--blob-opacity': '0.75',
    '--blob-rotate': 'rotate(-15deg)',
    '--blob-x': '-70px',
    '--blob-y': '-40px',
    '--blob-scale': 'scale(1.1)',
    '--blob-transition': 'all 1.2s ease-in-out',
    '--gradient-text': 'linear-gradient(to top right, var(--color-primary), var(--color-secondary), var(--color-accent))',
    '--gradient-text-animation': 'moveGradient 3s linear infinite',
    '--card-bg-gradient': 'linear-gradient(135deg, #ff6f61 0%, #ffb347 100%)',
},


 

  theme1: {
    '--color-bg': '#f9f4f2',
    '--color-text': '#150700',
    '--color-primary': '#8e3200',
    '--color-secondary': '#a64b2a',
    '--color-accent': '#d7a86e',
    '--font-family': "'Poppins', sans-serif",
    '--font-size-heading': '2rem',
    '--font-size-body': '1rem',
    '--border-radius': '12px',
    '--box-shadow-card': '0 4px 12px rgba(255,111,97,0.3)',
      '--box-shadow-card-heavy': ' 8px 8px 10px rgb(0 0 0 / 29%)',

    '--animation-speed': '0.3s',
    '--border-style': '1px solid #a64b2a',
    '--text-shadow': '1px 1px 3px rgba(255,111,97,0.4)',
    '--glass-bg': 'rgba(255,255,255,0.25)',
    '--glass-border': '1px solid rgba(255,255,255,0.5)',
    '--glass-blur': 'blur(10px)',
    '--blob-bg': 'linear-gradient(135deg, #8e3200, #a64b2a)',
    '--blob-border-radius': '60% 40% 50% 60%',
    '--blob-blur': 'blur(90px)',
    '--blob-opacity': '0.75',
    '--blob-rotate': 'rotate(-15deg)',
    '--blob-x': '-70px',
    '--blob-y': '-40px',
    '--blob-scale': 'scale(1.1)',
    '--blob-transition': 'all 1.2s ease-in-out',
     '--gradient-text': 'linear-gradient(to top right, var(--color-primary), var(--color-secondary), var(--color-accent))',
    '--gradient-text-animation': 'moveGradient 3s linear infinite',
    '--card-bg-gradient': 'linear-gradient(135deg, #ff6f61 0%, #ffb347 100%)',
  },

  
  theme2: {
    '--color-bg': '#f8f3f5',
    '--color-text': '#120409',
    '--color-primary': '#781d42',
    '--color-secondary': '#a3423c',
    '--color-accent': '#de834d',
    '--font-family': "'Poppins', sans-serif",
    '--font-size-heading': '2rem',
    '--font-size-body': '1rem',
    '--border-radius': '12px',
    '--box-shadow-card': '0 4px 12px rgba(255,111,97,0.3)',
      '--box-shadow-card-heavy': ' 8px 8px 10px rgb(0 0 0 / 29%)',

    '--animation-speed': '0.3s',
    '--border-style': '1px solid #a64b2a',
    '--text-shadow': '1px 1px 3px rgba(255,111,97,0.4)',
    '--glass-bg': 'rgba(255,255,255,0.25)',
    '--glass-border': '1px solid rgba(255,255,255,0.5)',
    '--glass-blur': 'blur(10px)',
    '--blob-bg': 'linear-gradient(to right, #781d42, #781d42)',
    '--blob-border-radius': '60% 40% 50% 60%',
    '--blob-blur': 'blur(90px)',
    '--blob-opacity': '0.75',
    '--blob-rotate': 'rotate(-15deg)',
    '--blob-x': '-70px',
    '--blob-y': '-40px',
    '--blob-scale': 'scale(1.1)',
    '--blob-transition': 'all 1.2s ease-in-out',
     '--gradient-text': 'linear-gradient(to top right, var(--color-primary), var(--color-secondary), var(--color-accent))',
    '--gradient-text-animation': 'moveGradient 3s linear infinite',
    '--card-bg-gradient': 'linear-gradient(135deg, #ff6f61 0%, #ffb347 100%)',
  },
  theme3: {
    '--color-bg': '#f3f3f6',          // From: --background
    '--color-text': '#03030c',        // From: --text
    '--color-primary': '#161853',     // From: --primary
    '--color-secondary': '#292c6d',   // From: --secondary
    '--color-accent': '#faedf0',      // From: --accent
    '--font-family': "'Poppins', sans-serif",
    '--font-size-heading': '2rem',
    '--font-size-body': '1rem',
    '--border-radius': '12px',
    '--box-shadow-card': '0 8px 24px rgba(172, 125, 136, 0.4)',   
      '--box-shadow-card-heavy': ' 8px 8px 10px rgb(0 0 0 / 29%)',

    '--animation-speed': '0.3s',
    '--border-style': '1px solid var(--color-primary)',
    '--text-shadow': 'linear-gradient(to top right, var(--color-primary), var(--color-secondary), var(--color-accent))',
    '--glass-bg': 'rgba(255, 255, 255, 0.15)',
    '--glass-border': '1px solid rgba(255,255,255,0.25)',
    '--glass-blur': 'blur(10px)',
    '--blob-bg': 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
    '--blob-border-radius': '50% 50% 40% 60%',
    '--blob-blur': 'blur(85px)',
    '--blob-opacity': '0.65',
    '--blob-rotate': 'rotate(20deg)',
    '--blob-x': '-60px',
    '--blob-y': '-50px',
    '--blob-scale': 'scale(1.2)',
    '--blob-transition': 'all 1.4s ease-in-out',
    '--gradient-text': 'linear-gradient(to top right, var(--color-primary), var(--color-secondary), var(--color-accent))',
    '--gradient-text-animation': 'moveGradient 3s linear infinite',
    '--card-bg-gradient': 'linear-gradient(to top right, var(--color-primary), var(--color-secondary), var(--color-accent))',
},

theme4: {
    '--color-bg': '#faf5f5',          // Background
    '--color-text': '#190808',        // Text color
    '--color-primary': '#aa3a3a',     // Primary color
    '--color-secondary': '#a4b787',   // Secondary color
    '--color-accent': '#f4f4f4',      // Accent color
    '--font-family': "'Poppins', sans-serif",
    '--font-size-heading': '2rem',
    '--font-size-body': '1rem',
    '--border-radius': '12px',
    
    // Soft box-shadow matching palette
    '--box-shadow-card': '0 8px 24px rgba(170, 58, 58, 0.3)',
      '--box-shadow-card-heavy': ' 8px 8px 10px rgb(0 0 0 / 29%)',
    
    '--animation-speed': '0.3s',
    '--border-style': '1px solid var(--color-primary)',

    // Subtle text shadow that blends well
    '--text-shadow': '2px 2px 4px rgba(170, 58, 58, 0.4)',

    '--glass-bg': 'rgba(255, 255, 255, 0.15)',
    '--glass-border': '1px solid rgba(255,255,255,0.25)',
    '--glass-blur': 'blur(10px)',


    '--gradient-text': 'linear-gradient(to top right, var(--color-primary), var(--color-secondary), var(--color-accent))',
    '--gradient-text-animation': 'moveGradient 3s linear infinite',

    '--card-bg-gradient': 'linear-gradient(to top right, var(--color-primary), var(--color-secondary), var(--color-accent))',
},
theme5: {
    '--color-bg': '#f5f5f5',          // Light background
    '--color-text': '#08080a',        // Dark text color
    '--color-primary': '#3a3845',     // Dark purple-ish primary
    '--color-secondary': '#f7ccac',   // Light pastel secondary
    '--color-accent': '#c69b7b',      // Soft warm accent

    '--font-family': "'Poppins', sans-serif",
    '--font-size-heading': '2rem',
    '--font-size-body': '1rem',
    '--border-radius': '12px',
    
    // Balanced box-shadow
    '--box-shadow-card': '0 8px 24px rgba(58, 56, 69, 0.3)',
      '--box-shadow-card-heavy': ' 8px 8px 10px rgb(0 0 0 / 29%)',

    '--animation-speed': '0.3s',
    '--border-style': '1px solid var(--color-primary)',

    // Subtle text shadow
    '--text-shadow': '2px 2px 4px rgba(58, 56, 69, 0.4)',

    '--glass-bg': 'rgba(255, 255, 255, 0.15)',
    '--glass-border': '1px solid rgba(255,255,255,0.25)',
    '--glass-blur': 'blur(10px)',

    '--blob-bg': 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
    '--blob-border-radius': '50% 50% 40% 60%',
    '--blob-blur': 'blur(85px)',
    '--blob-opacity': '0.65',
    '--blob-rotate': 'rotate(20deg)',
    '--blob-x': '-60px',
    '--blob-y': '-50px',
    '--blob-scale': 'scale(1.2)',
    '--blob-transition': 'all 1.4s ease-in-out',

    '--gradient-text': 'linear-gradient(to top right, var(--color-primary), var(--color-secondary), var(--color-accent))',
    '--gradient-text-animation': 'moveGradient 3s linear infinite',

    '--card-bg-gradient': 'linear-gradient(to top right, var(--color-primary), var(--color-secondary), var(--color-accent))',
},

//darkmode.....!

 forest: {
    '--color-bg': '#242220',
    '--color-text': '#ffff',
    '--color-primary': '#f6e7d8',
    '--color-secondary': '#f68989',
    '--font-family': "'Poppins', sans-serif",
    '--font-size-heading': '2rem',
    '--font-size-body': '1rem',
    '--border-radius': '12px',
    '--box-shadow-card': '0 4px 12px rgba(76,175,80,0.3)',
      '--box-shadow-card-heavy': ' 8px 8px 10px rgb(0 0 0 / 29%)',

    '--animation-speed': '0.3s',
    '--border-style': '1px solid #4caf50',
    '--text-shadow': '1px 1px 3px rgba(76,175,80,0.4)',
    '--glass-bg': 'rgba(255, 255, 255, 0.15)',
    '--glass-border': '1px solid rgba(255,255,255,0.25)',
    '--glass-blur': 'blur(10px)',
    '--blob-bg': 'linear-gradient(135deg, #f6e7d8, #f6e7d8)',
    '--blob-border-radius': '50% 50% 40% 60%',
    '--blob-blur': 'blur(85px)',
    '--blob-opacity': '0.65',
    '--blob-rotate': 'rotate(20deg)',
    '--blob-x': '-60px',
    '--blob-y': '-50px',
    '--blob-scale': 'scale(1.2)',
    '--blob-transition': 'all 1.4s ease-in-out',
      '--gradient-text': 'linear-gradient(to top right, var(--color-primary), var(--color-secondary), var(--color-accent))',

    '--gradient-text-animation': 'moveGradient 3s linear infinite',
    '--card-bg-gradient': 'linear-gradient(135deg, #2c3e1f 0%, #4caf50 100%)',
  },



 
  
 dark1: {
    '--color-bg': '#201b14',
    '--color-text': '#fdfbf9',
    '--color-primary': '#dab88b',
    '--color-secondary': '#f3e9dd',
    '--color-accent': '#fdf6ec',
    '--font-family': "'Poppins', sans-serif",
    '--font-size-heading': '2rem',
    '--font-size-body': '1rem',
    '--border-radius': '12px',
    '--box-shadow-card': '0 4px 12px rgba(76,175,80,0.3)',
      '--box-shadow-card-heavy': ' 8px 8px 10px rgb(0 0 0 / 29%)',

    '--animation-speed': '0.3s',
    '--border-style': '1px solid #4caf50',
    '--text-shadow': '1px 1px 3px rgba(76,175,80,0.4)',
    '--glass-bg': 'rgba(255, 255, 255, 0.15)',
    '--glass-border': '1px solid rgba(255,255,255,0.25)',
    '--glass-blur': 'blur(10px)',
    '--blob-bg': 'linear-gradient(135deg, #f6e7d8, #f6e7d8)',
    '--blob-border-radius': '50% 50% 40% 60%',
    '--blob-blur': 'blur(85px)',
    '--blob-opacity': '0.65',
    '--blob-rotate': 'rotate(20deg)',
    '--blob-x': '-60px',
    '--blob-y': '-50px',
    '--blob-scale': 'scale(1.2)',
    '--blob-transition': 'all 1.4s ease-in-out',
    '--gradient-text': 'linear-gradient(to top right, var(--color-primary), var(--color-secondary), var(--color-accent))',
    '--gradient-text-animation': 'moveGradient 3s linear infinite',
    '--card-bg-gradient': 'linear-gradient(135deg, #2c3e1f 0%, #4caf50 100%)',
  },




 dark2: {
    '--color-bg': '#25231f',
    '--color-text': '#fefefc',
    '--color-primary': '#f8ecd1',
    '--color-secondary': '#deb6ab',
    '--color-accent': '#ac7d88',
    '--font-family': "'Poppins', sans-serif",
    '--font-size-heading': '2rem',
    '--font-size-body': '1rem',
    '--border-radius': '12px',
    '--box-shadow-card': '0 8px 24px rgba(172, 125, 136, 0.4)',
      '--box-shadow-card-heavy': ' 8px 8px 10px rgb(0 0 0 / 29%)',
           
    '--animation-speed': '0.3s',
    '--border-style': '1px solid var(--color-primary)',
    '--text-shadow': 'linear-gradient(to top right, var(--color-primary), var(--color-secondary), var(--color-accent))',
    '--glass-bg': 'rgba(255, 255, 255, 0.15)',
    '--glass-border': '1px solid rgba(255,255,255,0.25)',
    '--glass-blur': 'blur(10px)',
    '--blob-bg': 'linear-gradient(135deg, #f8ecd1, #f8ecd1)',
    '--blob-border-radius': '50% 50% 40% 60%',
    '--blob-blur': 'blur(85px)',
    '--blob-opacity': '0.65',
    '--blob-rotate': 'rotate(20deg)',
    '--blob-x': '-60px',
    '--blob-y': '-50px',
    '--blob-scale': 'scale(1.2)',
    '--blob-transition': 'all 1.4s ease-in-out',
    '--gradient-text': 'linear-gradient(to top right, var(--color-primary), var(--color-secondary), var(--color-accent))',
    '--gradient-text-animation': 'moveGradient 3s linear infinite',
    '--card-bg-gradient': 'linear-gradient(to top right, var(--color-primary), var(--color-secondary), var(--color-accent))',
  },



 

dark3: {
    '--color-bg': '#161c1b',
    '--color-text': '#f9fbfb',
    '--color-primary': '#97bfb4',
    '--color-secondary': '#f5eedc',
    '--color-accent': '#dd4a48',
    '--font-family': "'Poppins', sans-serif",
    '--font-size-heading': '2rem',
    '--font-size-body': '1rem',
    '--border-radius': '12px',
    '--box-shadow-card': '0 8px 24px rgba(172, 125, 136, 0.4)', 
      '--box-shadow-card-heavy': ' 8px 8px 10px rgb(0 0 0 / 29%)',

    '--animation-speed': '0.3s',
    '--border-style': '1px solid var(--color-primary)',
    '--text-shadow': 'linear-gradient(to top right, var(--color-primary), var(--color-secondary), var(--color-accent))',
    '--glass-bg': 'rgba(255, 255, 255, 0.15)',
    '--glass-border': '1px solid rgba(255,255,255,0.25)',
    '--glass-blur': 'blur(10px)',
    '--blob-bg': 'linear-gradient(135deg, var(--color-primary))',
    '--blob-border-radius': '50% 50% 40% 60%',
    '--blob-blur': 'blur(85px)',
    '--blob-opacity': '0.65',
    '--blob-rotate': 'rotate(20deg)',
    '--blob-x': '-60px',
    '--blob-y': '-50px',
    '--blob-scale': 'scale(1.2)',
    '--blob-transition': 'all 1.4s ease-in-out',
    '--gradient-text': 'linear-gradient(to top right, var(--color-primary), var(--color-secondary), var(--color-accent))',
    '--gradient-text-animation': 'moveGradient 3s linear infinite',
    '--card-bg-gradient': 'linear-gradient(to top right, var(--color-primary), var(--color-secondary), var(--color-accent))',
},



theme6: {
    '--color-bg': '#f5f3f4',          // Light background
    '--color-text': '#090307',        // Very dark text color
    '--color-primary': '#411530',     // Deep maroon-ish primary
    '--color-secondary': '#d1512d',   // Vibrant orange-red secondary
    '--color-accent': '#f5c7a9',      // Light pastel peach accent

    '--font-family': "'Poppins', sans-serif",
    '--font-size-heading': '2rem',
    '--font-size-body': '1rem',
    '--border-radius': '12px',

    // Balanced box-shadow with primary color shade
    '--box-shadow-card': '0 8px 24px rgba(65, 21, 48, 0.3)',
      '--box-shadow-card-heavy': ' 8px 8px 10px rgb(0 0 0 / 29%)',

    '--animation-speed': '0.3s',
    '--border-style': '1px solid var(--color-primary)',

    // Subtle text shadow in primary shade
    '--text-shadow': '2px 2px 4px rgba(65, 21, 48, 0.4)',

    '--glass-bg': 'rgba(255, 255, 255, 0.15)',
    '--glass-border': '1px solid rgba(255,255,255,0.25)',
    '--glass-blur': 'blur(10px)',

    '--blob-bg': 'linear-gradient(135deg, var(--color-primary)',
    '--blob-border-radius': '50% 50% 40% 60%',
    '--blob-blur': 'blur(85px)',
    '--blob-opacity': '0.65',
    '--blob-rotate': 'rotate(20deg)',
    '--blob-x': '-60px',
    '--blob-y': '-50px',
    '--blob-scale': 'scale(1.2)',
    '--blob-transition': 'all 1.4s ease-in-out',

    '--gradient-text': 'linear-gradient(to top right, var(--color-primary), var(--color-secondary), var(--color-accent))',
    '--gradient-text-animation': 'moveGradient 3s linear infinite',

    '--card-bg-gradient': 'linear-gradient(to top right, var(--color-primary), var(--color-secondary), var(--color-accent))',
},
theme7: {
    '--color-bg': '#fbf4f6',          // Light soft pink background
    '--color-text': '#1a070c',        // Dark maroon-ish text color
    '--color-primary': '#b23256',     // Strong pinkish red primary
    '--color-secondary': '#fcd47d',   // Warm soft yellow secondary
    '--color-accent': '#31aa75',      // Fresh green accent

    '--font-family': "'Poppins', sans-serif",
    '--font-size-heading': '2rem',
    '--font-size-body': '1rem',
    '--border-radius': '12px',

    // Soft box-shadow using primary color shade
    '--box-shadow-card': '0 8px 24px rgba(178, 50, 86, 0.3)',
      '--box-shadow-card-heavy': ' 8px 8px 10px rgb(0 0 0 / 29%)',

    '--animation-speed': '0.3s',
    '--border-style': '1px solid var(--color-primary)',

    // Subtle text shadow in primary color shade
    '--text-shadow': '2px 2px 4px rgba(178, 50, 86, 0.4)',

    '--glass-bg': 'rgba(255, 255, 255, 0.15)',
    '--glass-border': '1px solid rgba(255,255,255,0.25)',
    '--glass-blur': 'blur(10px)',

    '--blob-bg': 'linear-gradient(135deg, var(--color-primary))',
    '--blob-border-radius': '50% 50% 40% 60%',
    '--blob-blur': 'blur(85px)',
    '--blob-opacity': '0.65',
    '--blob-rotate': 'rotate(20deg)',
    '--blob-x': '-60px',
    '--blob-y': '-50px',
    '--blob-scale': 'scale(1.2)',
    '--blob-transition': 'all 1.4s ease-in-out',

    '--gradient-text': 'linear-gradient(to top right, var(--color-primary), var(--color-secondary), var(--color-accent))',
    '--gradient-text-animation': 'moveGradient 3s linear infinite',

    '--card-bg-gradient': 'linear-gradient(to top right, var(--color-primary), var(--color-secondary), var(--color-accent))',
},

theme8: {
    '--color-bg': '#f7f6f8',          // Very light gray background
    '--color-text': '#100d11',        // Dark, subtle black shade for text
    '--color-primary': '#6e5773',     // Muted purple primary color
    '--color-secondary': '#d45d79',   // Vibrant pink secondary
    '--color-accent': '#ea9085',      // Soft peach accent

    '--font-family': "'Poppins', sans-serif",
    '--font-size-heading': '2rem',
    '--font-size-body': '1rem',
    '--border-radius': '12px',

    // Thoughtfully designed box shadow for elegance
    '--box-shadow-card': '0 8px 24px rgba(110, 87, 115, 0.2)',
      '--box-shadow-card-heavy': ' 8px 8px 10px rgb(0 0 0 / 29%)',

    '--animation-speed': '0.3s',
    '--border-style': '1px solid var(--color-primary)',

    // Subtle and soft text shadow for readability
    '--text-shadow': '1px 1px 3px rgba(110, 87, 115, 0.3)',

    '--glass-bg': 'rgba(255, 255, 255, 0.15)',
    '--glass-border': '1px solid rgba(255,255,255,0.25)',
    '--glass-blur': 'blur(10px)',

    // Balanced blob gradient
    '--blob-bg': 'linear-gradient(135deg, var(--color-primary))',
    '--blob-border-radius': '50% 50% 40% 60%',
    '--blob-blur': 'blur(85px)',
    '--blob-opacity': '0.65',
    '--blob-rotate': 'rotate(20deg)',
    '--blob-x': '-60px',
    '--blob-y': '-50px',
    '--blob-scale': 'scale(1.2)',
    '--blob-transition': 'all 1.4s ease-in-out',

    // Smooth gradient text
    '--gradient-text': 'linear-gradient(to top right, var(--color-primary), var(--color-secondary), var(--color-accent))',
    '--gradient-text-animation': 'moveGradient 3s linear infinite',

    // Card background gradient for nice soft effect
    '--card-bg-gradient': 'linear-gradient(to top right, var(--color-primary), var(--color-secondary), var(--color-accent))',
},

theme9: {
    '--color-bg': '#171714',          // Very dark background
    '--color-text': '#fafaf9',        // Very light text color
    '--color-primary': '#9e9d89',     // Soft neutral gray-green primary
    '--color-secondary': '#e4d3cf',   // Light pastel secondary
    '--color-accent': '#e2bcb7',      // Soft peach accent

    '--font-family': "'Poppins', sans-serif",
    '--font-size-heading': '2rem',
    '--font-size-body': '1rem',
    '--border-radius': '12px',

    '--box-shadow-card': '0 8px 24px rgba(158, 157, 137, 0.3)',
      '--box-shadow-card-heavy': ' 8px 8px 10px rgb(0 0 0 / 29%)',

    '--animation-speed': '0.3s',
    '--border-style': '1px solid var(--color-primary)',

    '--text-shadow': '1px 1px 3px rgba(158, 157, 137, 0.3)',

    '--glass-bg': 'rgba(255, 255, 255, 0.15)',
    '--glass-border': '1px solid rgba(255,255,255,0.25)',
    '--glass-blur': 'blur(10px)',

    '--blob-bg': 'linear-gradient(135deg, var(--color-primary))',
    '--blob-border-radius': '50% 50% 40% 60%',
    '--blob-blur': 'blur(85px)',
    '--blob-opacity': '0.65',
    '--blob-rotate': 'rotate(20deg)',
    '--blob-x': '-60px',
    '--blob-y': '-50px',
    '--blob-scale': 'scale(1.2)',
    '--blob-transition': 'all 1.4s ease-in-out',

    '--gradient-text': 'linear-gradient(to top right, var(--color-primary), var(--color-secondary), var(--color-accent))',
    '--gradient-text-animation': 'moveGradient 3s linear infinite',

    '--card-bg-gradient': 'linear-gradient(to top right, var(--color-primary), var(--color-secondary), var(--color-accent))',
},

theme10: {
    '--color-bg': '#f5f5f4',          // Very light background
    '--color-text': '#0b0807',        // Very dark text color
    '--color-primary': '#4a3933',     // Deep muted brown primary
    '--color-secondary': '#f0a500',   // Bright amber secondary
    '--color-accent': '#e45826',      // Bold orange-red accent

    '--font-family': "'Poppins', sans-serif",
    '--font-size-heading': '2rem',
    '--font-size-body': '1rem',
    '--border-radius': '12px',

    '--box-shadow-card': '0 8px 24px rgba(74, 57, 51, 0.3)',
      '--box-shadow-card-heavy': ' 8px 8px 10px rgb(0 0 0 / 29%)',

    '--animation-speed': '0.3s',
    '--border-style': '1px solid var(--color-primary)',

    '--text-shadow': '1px 1px 3px rgba(74, 57, 51, 0.3)',

    '--glass-bg': 'rgba(255, 255, 255, 0.15)',
    '--glass-border': '1px solid rgba(255,255,255,0.25)',
    '--glass-blur': 'blur(10px)',

    '--blob-bg': 'linear-gradient(135deg, var(--color-primary))',
    '--blob-border-radius': '50% 50% 40% 60%',
    '--blob-blur': 'blur(85px)',
    '--blob-opacity': '0.65',
    '--blob-rotate': 'rotate(20deg)',
    '--blob-x': '-60px',
    '--blob-y': '-50px',
    '--blob-scale': 'scale(1.2)',
    '--blob-transition': 'all 1.4s ease-in-out',

    '--gradient-text': 'linear-gradient(to top right, var(--color-primary), var(--color-secondary), var(--color-accent))',
    '--gradient-text-animation': 'moveGradient 3s linear infinite',

    '--card-bg-gradient': 'linear-gradient(to top right, var(--color-primary), var(--color-secondary), var(--color-accent))',
},

theme11: {
    '--color-bg': '#f7f5f3',          // Soft light beige background
    '--color-text': '#0e0a04',        // Dark brownish black text color
    '--color-primary': '#61481c',     // Rich dark brown primary
    '--color-secondary': '#a47e3b',   // Warm golden secondary
    '--color-accent': '#bf9742',      // Bright golden accent

    '--font-family': "'Poppins', sans-serif",
    '--font-size-heading': '2rem',
    '--font-size-body': '1rem',
    '--border-radius': '12px',

    // Smooth, elegant box shadow matching primary shade
    '--box-shadow-card': '0 8px 24px rgba(97, 72, 28, 0.3)',
      '--box-shadow-card-heavy': ' 8px 8px 10px rgb(0 0 0 / 29%)',

    '--animation-speed': '0.3s',
    '--border-style': '1px solid var(--color-primary)',

    // Subtle text shadow in primary color tone
    '--text-shadow': '1px 1px 3px rgba(97, 72, 28, 0.3)',

    '--glass-bg': 'rgba(255, 255, 255, 0.15)',
    '--glass-border': '1px solid rgba(255,255,255,0.25)',
    '--glass-blur': 'blur(10px)',

    '--blob-bg': 'linear-gradient(135deg, var(--color-primary))',
    '--blob-border-radius': '50% 50% 40% 60%',
    '--blob-blur': 'blur(85px)',
    '--blob-opacity': '0.65',
    '--blob-rotate': 'rotate(20deg)',
    '--blob-x': '-60px',
    '--blob-y': '-50px',
    '--blob-scale': 'scale(1.2)',
    '--blob-transition': 'all 1.4s ease-in-out',

    '--gradient-text': 'linear-gradient(to top right, var(--color-primary), var(--color-secondary), var(--color-accent))',
    '--gradient-text-animation': 'moveGradient 3s linear infinite',

    '--card-bg-gradient': 'linear-gradient(to top right, var(--color-primary), var(--color-secondary), var(--color-accent))',
},
theme12: {
    '--color-bg': '#25211a',        
    '--color-text': '#fefdfa',        
    '--color-primary': '#f9e0ae',    
    '--color-secondary': '#fc8621',   
    '--color-accent': '#c24914',    

    '--font-family': "'Poppins', sans-serif",
    '--font-size-heading': '2rem',
    '--font-size-body': '1rem',
    '--border-radius': '12px',

    '--box-shadow-card': '0 8px 24px rgba(249, 224, 174, 0.3)',
      '--box-shadow-card-heavy': ' 8px 8px 10px rgb(0 0 0 / 29%)',

    '--animation-speed': '0.3s',
    '--border-style': '1px solid var(--color-primary)',

    '--text-shadow': '1px 1px 3px rgba(249, 224, 174, 0.3)',

    '--glass-bg': 'rgba(255, 255, 255, 0.15)',
    '--glass-border': '1px solid rgba(255,255,255,0.25)',
    '--glass-blur': 'blur(10px)',

    '--blob-bg': 'linear-gradient(135deg, var(--color-primary))',
    '--blob-border-radius': '50% 50% 40% 60%',
    '--blob-blur': 'blur(85px)',
    '--blob-opacity': '0.65',
    '--blob-rotate': 'rotate(20deg)',
    '--blob-x': '-60px',
    '--blob-y': '-50px',
    '--blob-scale': 'scale(1.2)',
    '--blob-transition': 'all 1.4s ease-in-out',

    '--gradient-text': 'linear-gradient(to top right, var(--color-primary), var(--color-secondary), var(--color-accent))',
    '--gradient-text-animation': 'moveGradient 3s linear infinite',

    '--card-bg-gradient': 'linear-gradient(to top right, var(--color-primary), var(--color-secondary), var(--color-accent))',
},

theme13: {
    '--color-bg': '#f7f7f6',          
    '--color-text': '#0e100c',       
    '--color-primary': '#5f6f52',     
    '--color-secondary': '#a9b388',   
    '--color-accent': '#fefae0',      

    '--font-family': "'Poppins', sans-serif",
    '--font-size-heading': '2rem',
    '--font-size-body': '1rem',
    '--border-radius': '12px',

    '--box-shadow-card': '0 8px 24px rgba(95, 111, 82, 0.3)',
      '--box-shadow-card-heavy': ' 8px 8px 10px rgb(0 0 0 / 29%)',

    '--animation-speed': '0.3s',
    '--border-style': '1px solid var(--color-primary)',

    '--text-shadow': '1px 1px 3px rgba(95, 111, 82, 0.3)',

    '--glass-bg': 'rgba(255, 255, 255, 0.15)',
    '--glass-border': '1px solid rgba(255,255,255,0.25)',
    '--glass-blur': 'blur(10px)',

    '--blob-bg': 'linear-gradient(135deg, var(--color-primary), var(--color-secondary))',
    '--blob-border-radius': '50% 50% 40% 60%',
    '--blob-blur': 'blur(85px)',
    '--blob-opacity': '0.65',
    '--blob-rotate': 'rotate(20deg)',
    '--blob-x': '-60px',
    '--blob-y': '-50px',
    '--blob-scale': 'scale(1.2)',
    '--blob-transition': 'all 1.4s ease-in-out',

    '--gradient-text': 'linear-gradient(to top right, var(--color-primary), var(--color-secondary), var(--color-accent))',
    '--gradient-text-animation': 'moveGradient 3s linear infinite',

    '--card-bg-gradient': 'linear-gradient(to top right, var(--color-primary), var(--color-secondary), var(--color-accent))',
},

 themeName :['pastel', 'warm', 'cold','angry','happy', 'sunset' ]


};



