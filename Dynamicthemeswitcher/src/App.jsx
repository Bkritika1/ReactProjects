import Header from "../src/Header";
import Hero from "../src/Hero";
import Footer from "../src/Footer";
import SidebarSwitcher from "./SidebarSwitcher";
// import "./styles.css";

export default function App() {
  return (
    <div>

      <Header />
      <SidebarSwitcher/>
      <Hero />
      <Footer />
    </div>
  );
}
