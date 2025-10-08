import './index.css'
import Hero from './components/Hero'
import Gallery from './components/Gallery'
import LoveNotes from './components/LoveNotes'
import SurpriseBox from './components/SurpriseBox'
import BirthdayWish from './components/BirthdayWish'

function App() {
  return (
    <>
      <Hero />
      <Gallery />
      <LoveNotes />
      <SurpriseBox />
      <BirthdayWish />

      <audio autoPlay loop>
        <source src="/assets/bg-music.mp3" type="audio/mpeg" />
      </audio>
    </>
  )
}

export default App
