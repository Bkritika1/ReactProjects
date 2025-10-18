// import { Link } from "react-router-dom";
// import "./Features.css";

// export default function Features() {
//   const pages = [
//     { id: 1, name: "E-Commerce Landing", route: "/ecommerce" },
//     { id: 1, name: "ModeranLanding", route: "/moderan" },
//     { id: 1, name: "ModeranLanding1", route: "/moderan1" },
//     { id: 1, name: "Modern", route: "/moderan2" },



//     { id: 2, name: "Portfolio Landing", route: "/portfolio" },
//     { id: 3, name: "Dashboard Landing", route: "/dashboard" },
//   ];

//   return (
//     <section className="features-page">
//       <h1>Choose a Landing Page</h1>
//       <div className="landing-grid">
//         {pages.map((page) => (
//           <Link key={page.id} to={page.route} className="landing-card">
//             <div className="card-inner">
//               <h3>{page.name}</h3>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// }


// import { Link } from "react-router-dom";
// import "./Features.css";
// import { landingPagesData } from "../landingData.js/landingPagesData";


// export default function Features() {
//   return (
//     <section className="features-page">
//       <h1>Choose a Landing Page</h1>
//       <div className="landing-grid">
//         {landingPagesData.map((page) => (
//           <Link key={page.id} to={page.path} className="landing-card">
//             <div className="card-inner">
//               <h3>{page.name}</h3>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// }
import { Link } from "react-router-dom";
import { landingPagesData } from "../landingData.js/landingPagesData";


export default function Features() {
  return (
    <section className="features-page">
      <h1>Choose a Landing Page</h1>
      <div className="landing-grid">
        {landingPagesData.map((page) => (
          <Link key={page.id} to={`/landing/${page.id}`} className="landing-card">
            <div className="card-inner">
              <h3>{page.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

