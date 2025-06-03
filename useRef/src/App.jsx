import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Toggle from './OnOff'
import Chat from './Chat'
import Form from './Form'
import CatFriends from './ScrollingElement'
import Count from './Count'
import VideoPlayer from './ViMaker'
import ConsoleLog from './Log'
import AddCount from './AddCount'
import Tab from './Tab'
// import Question4 from './Question4'
import Question5 from './Question5'
import Question6 from './Question6'
import Question7 from './Question7'
import Question8 from './Question8'
import Question9 from './Question9'
import Question10 from './Question10'

import Question11 from'./Question11'
function App() {
 
  return (
    <>
     <h1>
      kritika sharma 
     </h1>
     <Toggle/>
     <Chat/>
    <div> <Form/></div>
    <CatFriends/>
    <Count/>
    <VideoPlayer/>
    <ConsoleLog/>
    <AddCount/>
    <Tab/>
    {/* <Question4/> */}
    <Question5/>
    <Question6/>
    <Question7/>
    <Question8/>
    <Question9/>
    <Question10/>
    <Question11/>
    </>
  )
}

export default App


