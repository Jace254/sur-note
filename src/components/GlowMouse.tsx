import { motion, useMotionTemplate, MotionValue } from "framer-motion";

export default function GlowMouse({mx, my}:{mx: MotionValue<number>, my: MotionValue<number>}) {
   

  return (
    <motion.div
      className="hidden sm:block pointer-events-none absolute max-w-full max-h-full -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
      style={{
        background: useMotionTemplate`
        radial-gradient(
            200px circle at ${mx}px ${my}px,
            rgba(14, 165, 233, 0.19),
            transparent 80%
        )
    `,
      }}
    />
  );
}
