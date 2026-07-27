import { motion, useReducedMotion } from 'framer-motion';
import { pageVariants } from '@/lib/motion';

export default function RouteTransition({ children }) {
  const reduceMotion = useReducedMotion();
  return <motion.div variants={pageVariants} initial={reduceMotion ? false : 'initial'} animate="animate" exit={reduceMotion ? undefined : 'exit'}>{children}</motion.div>;
}
