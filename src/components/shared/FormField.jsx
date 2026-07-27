import { cn } from '@/lib/utils';

export default function FormField({ id, label, hint, className, children }) {
  return <div className={cn('grid gap-2 transition-colors focus-within:text-primary', className)}><label htmlFor={id} className="text-sm font-medium text-foreground transition-colors">{label}</label>{children}{hint ? <p className="text-xs text-muted-foreground">{hint}</p> : null}</div>;
}
