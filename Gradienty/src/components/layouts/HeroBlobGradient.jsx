import { motion } from "framer-motion";

export default function HeroBlobGradient({ data, theme }) {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center py-24 overflow-hidden"
      style={{ background: theme.bgGradient, color: theme.text }}
    >
      {/* Blob background */}
      <div className="absolute w-[500px] h-[500px] bg-pink-300 rounded-full blur-3xl opacity-40 -z-10 top-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-blue-200 rounded-full blur-3xl opacity-40 -z-10 bottom-[-150px]" />

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-bold mb-4"
      >
        {data.title}
      </motion.h1>

      <p className="text-lg mb-8 max-w-2xl">{data.subtitle}</p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        style={{
          background: theme.button.bg,
          color: theme.button.text,
          borderRadius: "1rem",
          padding: "0.75rem 1.5rem"
        }}
      >
        {data.buttonText}
      </motion.button>

      <motion.img
        src={data.image}
        alt="Hero"
        className="mt-12 w-[350px] rounded-2xl shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      />
    </section>
  );
}
