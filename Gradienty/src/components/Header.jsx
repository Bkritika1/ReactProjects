import { Link } from "react-router-dom";

export default function Header({ logo, nav }) {
  return (
    <header style={{ backgroundColor:"var(--color-bg)", padding: "1rem 10%",color:'var(--color-text)', display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <Link to="/">
        <img src={logo} alt="logo" style={{ height: "40px" }} />
      </Link>
      <nav>
        {nav?.map((item, i) => (
          <Link key={i} to={item.route} style={{ margin: "0 1rem", color: "var(--color-text)", textDecoration: "none" }}>
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
