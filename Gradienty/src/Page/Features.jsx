
import { Link } from "react-router-dom";
import { landingPagesData } from "../landingData.js/landingPagesData";


export default function Features() {
  return (
    <section className="features-page">
      <h1>Choose a Landing Page</h1>
      <h1>Choose a Landing Page</h1>

      <div className="landing-grid">
        {landingPagesData.map((page) => (
          <Link key={page.id} to={`/landing/${page.id}`} className="landing-card">
            <div className="card-inner">
              <h3>{page.name}</h3>
              <h3>{page.name}</h3>

            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

// careers@teachedison.com

//Email Address
//info@peoplexm.ai