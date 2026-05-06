import { motion } from "framer-motion";

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  amount = 0.18,
}) {
  return (
    <motion.section
      className={className}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.75, ease: "easeOut", delay }}
    >
      {children}
    </motion.section>
  );
}
