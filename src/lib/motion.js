export const motionTransition = { duration: 0.22, ease: 'easeOut' };

export const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.25, ease: 'easeOut' } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.18, ease: 'easeInOut' } },
};

export const cardVariants = {
  initial: { opacity: 0, y: 10, scale: 0.985 },
  animate: (index = 0) => ({ opacity: 1, y: 0, scale: 1, transition: { duration: 0.22, delay: index * 0.06, ease: 'easeOut' } }),
};
