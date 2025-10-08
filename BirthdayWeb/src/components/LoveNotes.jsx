import { useState } from 'react'

export default function LoveNotes() {
  const [show, setShow] = useState(false)

  return (
    <div className="notes">
      <h2>Click for a Surprise 💌</h2>
      <button onClick={() => setShow(!show)}>Reveal My Love</button>
      {show && <p>Mota, you make my world brighter every single day 💖 - Kittuu</p>}
    </div>
  )
}
