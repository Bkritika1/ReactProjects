import { useState } from 'react'
import { motion } from "framer-motion"

export default function SurpriseBox() {
  const [open, setOpen] = useState(false)

  return (
    <div className="gift">
      <motion.div
        whileTap={{ scale: 0.9 }}
        className="box"
        onClick={() => setOpen(!open)}
      >
        🎁 Tap to Open
      </motion.div>
      {open && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          You are my biggest gift from the universe 💝
        </motion.p>
      )}
    </div>
  )
}
