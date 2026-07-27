import { motion, useReducedMotion } from 'framer-motion';

export default function Background() {
  const reduceMotion = useReducedMotion();

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[radial-gradient(circle_at_72%_12%,rgb(219_234_254_/_0.5),transparent_28rem),radial-gradient(circle_at_15%_80%,rgb(241_245_249_/_0.8),transparent_24rem)]">
      <motion.div
        className="absolute -top-40 left-1/2 size-96 -translate-x-1/2 rounded-full bg-primary/5 blur-3xl"
        animate={reduceMotion ? undefined : { x: ['-50%', '-44%', '-50%'], y: [0, 24, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
