import { animationsData } from "../data/animationsData";
import { Link } from "react-router-dom";
import AnimationCard from "../components/AnimationCard";

const Home = () => {
  return (
    <div className="home">
      <h1>Satisfying Animations ✨</h1>
      <div className="animation-grid">
        {animationsData.map(anim => (
          <Link key={anim.id} to={`/animation/${anim.id}`}>
            <AnimationCard data={anim} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
