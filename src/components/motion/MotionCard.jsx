import { motion, useReducedMotion } from 'framer-motion';
import { cardVariants } from '@/lib/motion';
import { cn } from '@/lib/utils';

export default function MotionCard({ className, index = 0, children, ...props }) {
  const reduceMotion = useReducedMotion();
  return <motion.div initial={reduceMotion ? false : 'initial'} animate="animate" custom={index} variants={cardVariants} whileHover={reduceMotion ? undefined : { y: -4, boxShadow: '0 18px 35px rgba(15, 23, 42, 0.09)' }} className={cn(className)} {...props}>{children}</motion.div>;
}
