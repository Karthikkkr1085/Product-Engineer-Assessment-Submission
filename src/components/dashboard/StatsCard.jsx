import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';

export default function StatsCard({ label, value, detail, icon: Icon }) {
  return (
    <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.25 }}>
      <Card className="bg-card/80 shadow-sm">
        <CardContent className="flex items-start justify-between gap-4">
          <div><p className="text-sm text-muted-foreground">{label}</p><p className="mt-1 text-2xl font-semibold tracking-tight">{value}</p>{detail ? <p className="mt-1 text-xs text-muted-foreground">{detail}</p> : null}</div>
          {Icon ? <span className="grid size-9 place-items-center rounded-lg bg-primary/10 text-primary"><Icon className="size-4" aria-hidden="true" /></span> : null}
        </CardContent>
      </Card>
    </motion.div>
  );
}
