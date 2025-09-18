
// import { themeData } from "../src/themeData";
// export default function Navbar({ toggleTheme, darkMode, changeTheme }) {

//     const handleRandomTheme = () => {
//     const themes = Object.keys(themeData);
//     const randomTheme = themes[Math.floor(Math.random() * themes.length)];
//     changeTheme(randomTheme);
//   };
//   return (
//     <header className="header">
//       {/* Left Section */}
//       <div className="header-left">
//         <div className="logo">
//           <span className="logo-gradient">My</span>Website
//         </div>
//         <nav>
//           <ul>
//             <li>Home</li>
//             <li>About</li>
//             <li>Contact</li>
//             <li>Career</li>
//           </ul>
//         </nav>


//       </div>

//       {/* Right Section */}
//       <div className="header-right">
//         <button className="icon-btn">
//           <i className="fa fa-lock"></i>
//         </button>
//         <button className="icon-btn">
//           <i className="fa fa-heart" style={{ color: "#ef4444" }}></i>
//         </button>

//         <div className="user-card">
//           <span className="user-name">Ryman Alex</span>
//           <img src="https://i.pravatar.cc/40" alt="avatar" />
//         </div>
//       </div>

//       <div className="navbar-actions">
//           <button className="random-btn" onClick={handleRandomTheme}>
//           Random Theme
//         </button>

//         {/* Toggle Light/Dark */}
//         <button onClick={toggleTheme} className="theme-toggle">
//           {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
//         </button>

//         {/* Dropdown for Multiple Themes */}
//         <select
//           onChange={(e) => changeTheme(e.target.value)}
//           defaultValue="light"
//           className="theme-dropdown"
//         >
//           {Object.keys(themeData).map((theme) => (
//             <option key={theme} value={theme}>
//               {theme.charAt(0).toUpperCase() + theme.slice(1)} {/* Capitalize */}
//             </option>
//           ))}
//         </select>

//       </div>

//     </header>

//   );
// }



export default function Navbar() {
 

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <span className="logo-gradient">My Website</span>
        </div>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Career</li>
          </ul>
        </nav>
      </div>

      <div className="header-right">
        <button className="icon-btn">
          <i className="fa fa-lock" style={{ background: 'var(--gradient-text)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'}}></i>
        </button>
        <button className="icon-btn">
          <i className="fa fa-heart" style={{ background: 'var(--gradient-text)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'}}></i>
        </button>

        <div className="user-card">
          <span className="user-name">Ryman Alex</span>
          <img src="https://i.pravatar.cc/40" alt="avatar" />
        </div>
      </div>

     
    </header>
  );
}
