import { motion } from "framer-motion";

export default function FeatureGradientCards({ data }) {
  return (
    <section className="py-20 text-center">
      <h2 className="text-4xl font-semibold mb-12">{data.heading}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {data.features.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="p-6 rounded-2xl shadow-lg bg-white/30 backdrop-blur-md border border-white/20"
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-700">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
