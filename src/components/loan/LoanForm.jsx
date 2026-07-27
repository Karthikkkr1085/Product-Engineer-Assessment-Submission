import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function LoanForm({ children, title, description, onSubmit, onBack, submitLabel = 'Continue', isSubmitting = false }) {
  return (
    <motion.form initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} onSubmit={onSubmit} className="space-y-6">
      <div className="space-y-2"><h1 className="text-2xl font-semibold tracking-tight">{title}</h1>{description ? <p className="max-w-2xl text-sm leading-6 text-muted-foreground">{description}</p> : null}</div>
      <Card><CardContent className="space-y-5">{children}</CardContent></Card>
      <div className="flex items-center justify-between gap-3">
        {onBack ? <Button type="button" variant="outline" onClick={onBack}>Back</Button> : <span />}
        <Button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Saving…' : submitLabel}</Button>
      </div>
    </motion.form>
  );
}
