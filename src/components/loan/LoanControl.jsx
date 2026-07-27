import { motion } from 'framer-motion';

export default function LoanControl({ label, value, minLabel, maxLabel, progress, children }) {
  return <motion.section initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2 }} className="loan-control"><div className="mb-5 flex items-start justify-between gap-4"><div><p className="text-sm font-semibold text-foreground">{label}</p><p className="mt-1 text-xs text-muted-foreground">Adjust to see your updated repayment plan.</p></div><motion.output key={value} initial={{ opacity: 0.65, y: 3 }} animate={{ opacity: 1, y: 0 }} className="rounded-xl bg-primary/8 px-3 py-2 text-lg font-semibold tracking-tight text-primary">{value}</motion.output></div>{children}<div className="mt-3 flex justify-between text-xs font-medium text-muted-foreground"><span>{minLabel}</span><span>{maxLabel}</span></div></motion.section>;
}
