import { motion } from 'framer-motion'

export default function BirthdayWish() {
  return (
    <motion.div
      className="wish"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <h2>To My Dearest Mota 💕</h2>
      <p>
        On this special day, I just want to say…  
        You are the best part of my life.  
        I’m grateful for every smile, hug, and memory.  
        Happy Birthday, Kittuu! 🎂🥹🎉
      </p>
    </motion.div>
  )
}
