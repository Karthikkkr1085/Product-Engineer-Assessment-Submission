import { Check } from 'lucide-react';
import { STEPS } from '@/data/steps';
import { cn } from '@/lib/utils';

export default function Stepper({ currentStep, steps = STEPS, className }) {
  return (
    <ol aria-label="Loan application progress" className={cn('flex flex-wrap gap-x-4 gap-y-3', className)}>
      {steps.map((step) => {
        const isComplete = step.n < currentStep;
        const isCurrent = step.n === currentStep;
        return (
          <li key={step.n} aria-current={isCurrent ? 'step' : undefined} className="flex items-center gap-2 text-sm">
            <span className={cn('grid size-6 place-items-center rounded-full border text-xs font-semibold', isComplete && 'border-primary bg-primary text-primary-foreground', isCurrent && 'border-primary text-primary', !isComplete && !isCurrent && 'border-border text-muted-foreground')}>
              {isComplete ? <Check className="size-3.5" aria-hidden="true" /> : step.n}
            </span>
            <span className={cn(isCurrent ? 'font-medium text-foreground' : 'text-muted-foreground')}>{step.label}</span>
          </li>
        );
      })}
    </ol>
  );
}
