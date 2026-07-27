import { motion } from 'framer-motion';

export default function PageHeader({ eyebrow, title, description }) {
  return <motion.header initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.28, ease: 'easeOut' }} className="mb-6 space-y-2 sm:mb-8"><p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">{eyebrow}</p><h1 className="text-2xl font-semibold tracking-[-0.03em] text-foreground sm:text-3xl">{title}</h1>{description ? <p className="max-w-2xl text-sm leading-6 text-muted-foreground sm:text-[0.95rem]">{description}</p> : null}</motion.header>;
}
