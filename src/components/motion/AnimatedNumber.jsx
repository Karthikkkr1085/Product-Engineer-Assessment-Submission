import { animate, motion, useMotionValue, useReducedMotion, useTransform } from 'framer-motion';
import { useEffect } from 'react';

export default function AnimatedNumber({ value, format = (number) => number.toLocaleString('en-IN'), round = true }) {
  const reduceMotion = useReducedMotion();
  const motionValue = useMotionValue(value);
  const display = useTransform(motionValue, (latest) => format(round ? Math.round(latest) : latest));

  useEffect(() => {
    if (reduceMotion) { motionValue.set(value); return undefined; }
    const controls = animate(motionValue, value, { duration: 0.24, ease: 'easeOut' });
    return () => controls.stop();
  }, [motionValue, reduceMotion, value]);

  return <motion.span>{display}</motion.span>;
}
