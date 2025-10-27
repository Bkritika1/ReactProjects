import { Link } from "react-router-dom";

export default function Header({ theme, logo, nav }) {
  return (
    <header style={{ backgroundColor:"var(--color-bg)", padding: "1rem 10%", color: "#fff", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <Link to="/">
        <img src={logo} alt="logo" style={{ height: "40px" }} />
      </Link>
      <nav>
        {nav?.map((item, i) => (
          <Link key={i} to={item.route} style={{ margin: "0 1rem", color: "#fff", textDecoration: "none" }}>
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
