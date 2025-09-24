// import { useState } from 'react';
// import Navbar from '../src/Navbar';
// import HeroSection from '../src/HeroSection';
// import Features from '../src/Features';
// import Footer from '../src/Footer';

// function App() {
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleTheme = () => {
//     document.documentElement.setAttribute('data-theme', darkMode ? 'light' : 'dark');
//     setDarkMode(!darkMode);
//   };

//   return (
//     <>
//       <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
//       <main>
//         <HeroSection />
//         <Features />
//       </main>
//       <Footer />
//     </>
//   );
// }

// export default App;


// import { useState, useEffect } from 'react';
// import Navbar from '../src/Navbar';
// import HeroSection from '../src/HeroSection';
// import Features from '../src/Features';
// import Footer from '../src/Footer';
// import { applyTheme } from '../src/themeManager';

// function App() {
//   const [currentTheme, setCurrentTheme] = useState('light');

//   useEffect(() => {
//     const savedTheme = localStorage.getItem('theme') || 'light';
//     applyTheme(savedTheme);
//     setCurrentTheme(savedTheme);
//   }, []);

//   const toggleTheme = () => {
//     const newTheme = currentTheme === 'light' ? 'dark' : 'light';
//     applyTheme(newTheme);
//     setCurrentTheme(newTheme);
//   };

//   return (
//     <>
//       <Navbar toggleTheme={toggleTheme} darkMode={currentTheme === 'dark'} />
//       <main>
//         <HeroSection />
//         <Features />
//       </main>
//       <Footer />
//     </>
//   );
// }

// export default App;

import '@fortawesome/fontawesome-free/css/all.min.css';

import { useState, useEffect } from 'react';
import Navbar from '../src/Navbar';
import HeroSection from '../src/HeroSection';
import Features from '../src/Features';
import Footer from '../src/Footer';
import { applyTheme } from '../src/themeManager';
import AdvancedColorTools from './AdvancedColorTools';
import BottomToolbar from '../src/BottomToolbar';
import Heropallet from './Heropallet';


function App() {
  const [currentTheme, setCurrentTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);
    setCurrentTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    applyTheme(newTheme);
    setCurrentTheme(newTheme);
  };

  const changeTheme = (theme) => {
    applyTheme(theme);
    setCurrentTheme(theme);
  };

  return (
    <>
      <Navbar/>

     
      <main>
      
        <HeroSection />
        <Features />
        <AdvancedColorTools/>
        <Heropallet/>
      </main>
       <BottomToolbar     toggleTheme={toggleTheme}
        darkMode={currentTheme === 'dark'}
        changeTheme={changeTheme}/>
      <Footer />
    </>
  );
}

export default App;
