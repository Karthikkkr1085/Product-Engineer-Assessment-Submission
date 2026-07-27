import MotionCard from '../motion/MotionCard';

export default function LoanMetric({ icon: Icon, label, value, helper }) {
  return <MotionCard className="metric-card"><span className="grid size-9 place-items-center rounded-xl bg-primary/8 text-primary"><Icon className="size-4" aria-hidden="true" /></span><p className="mt-4 text-xs font-semibold tracking-wide text-muted-foreground uppercase">{label}</p><p className="mt-1 text-xl font-semibold tracking-tight text-foreground">{value}</p>{helper ? <p className="mt-1 text-xs text-muted-foreground">{helper}</p> : null}</MotionCard>;
}
