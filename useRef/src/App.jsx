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
    </>
  )
}

export default App


