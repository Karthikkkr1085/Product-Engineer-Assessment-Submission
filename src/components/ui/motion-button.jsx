import { motion } from 'framer-motion';
import { LoaderCircle } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function MotionButton({ className, variant = 'default', size = 'default', isLoading = false, children, disabled, ...props }) {
  return <motion.button whileHover={disabled || isLoading ? undefined : { y: -1 }} whileTap={disabled || isLoading ? undefined : { scale: 0.98 }} transition={{ duration: 0.16, ease: 'easeOut' }} className={cn(buttonVariants({ variant, size, className }), 'h-10 rounded-xl px-4 shadow-sm')} disabled={disabled || isLoading} aria-busy={isLoading || undefined} {...props}>{isLoading ? <LoaderCircle className="animate-spin" aria-hidden="true" /> : null}{children}</motion.button>;
}
