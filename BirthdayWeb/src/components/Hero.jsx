import { motion } from "framer-motion"

export default function Hero() {
  return (
    <motion.div
      className="hero"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1>🎂 Happy Birthday, Mota! 🎉</h1>
      <p>From your Kittuu 💕</p>
    </motion.div>
  )
}
