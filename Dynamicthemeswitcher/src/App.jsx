
// import "./styles.css";
import Header from './Header'
import Hero from './Hero'
import Footer from './Footer'
// import SidebarSwitcher from './SidebarSwitcher';
import BottomToolbar from './BottomToolbar';
export default function App() {
  return (
         <div>
          <Header/>
          <Hero/>
          <Footer/>
          {/* <SidebarSwitcher/> */}
          <BottomToolbar/>
         </div>
  );
}
