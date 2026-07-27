import { BadgeCheck, BriefcaseBusiness, Check, CircleDollarSign, ClipboardCheck, FileText, HandCoins, LayoutDashboard, LogIn, Send, UserRound } from 'lucide-react';
import { motion } from 'framer-motion';
import { STEPS } from '../../data/steps';
import { useApplication } from '../../context/ApplicationContext';
import { LOAN_TYPES, estimateEMI, formatINR } from '../../data/mockData';

const stepIcons = [LogIn, LayoutDashboard, HandCoins, CircleDollarSign, UserRound, BriefcaseBusiness, ClipboardCheck, BadgeCheck, Send, Check];

export default function LedgerRail({ currentStep }) {
  const { application } = useApplication();
  const loanType = LOAN_TYPES.find((loan) => loan.id === application.loanTypeId) || LOAN_TYPES[0];
  const emi = estimateEMI(application.amount, loanType.rate, application.tenureMonths);
  const completion = Math.round((currentStep / STEPS.length) * 100);

  return (
    <aside className="sticky top-0 hidden h-screen flex-col border-r border-slate-200/90 bg-slate-50/90 px-5 py-6 backdrop-blur-xl lg:flex">
      <div className="mb-8 flex items-center gap-3 px-2"><span className="grid size-9 place-items-center rounded-xl bg-primary text-sm font-bold text-primary-foreground shadow-sm">F</span><div><p className="font-semibold tracking-tight">Finovrr</p><p className="text-xs text-muted-foreground">Loan workspace</p></div></div>
      <div className="mb-7 rounded-2xl border border-slate-200 bg-slate-50/80 p-3.5"><div className="mb-2 flex items-center justify-between text-xs font-medium"><span className="text-muted-foreground">Application progress</span><motion.span key={completion} initial={{ opacity: 0.5 }} animate={{ opacity: 1 }} className="text-primary">{completion}%</motion.span></div><div className="h-1.5 overflow-hidden rounded-full bg-slate-200"><motion.div initial={{ width: 0 }} animate={{ width: `${completion}%` }} transition={{ duration: 0.25, ease: 'easeOut' }} className="h-full rounded-full bg-primary" /></div></div>
      <ol className="relative space-y-1 before:absolute before:top-6 before:bottom-6 before:left-[1.15rem] before:w-px before:bg-slate-200">
        {STEPS.map((step) => {
          const Icon = stepIcons[step.n - 1] ?? FileText;
          const completed = step.n < currentStep;
          const current = step.n === currentStep;
          return <li key={step.n} className="relative"><motion.div layout transition={{ duration: 0.2 }} whileHover={{ x: 2 }} className={`relative z-10 flex items-center gap-3 rounded-xl px-2 py-2.5 text-sm transition-colors ${current ? 'bg-primary/10 font-semibold text-primary shadow-sm' : completed ? 'text-slate-700' : 'text-slate-400'}`}><span className={`grid size-6 place-items-center rounded-full border text-xs ${completed ? 'border-primary bg-primary text-primary-foreground' : current ? 'border-primary bg-white text-primary shadow-sm ring-4 ring-primary/8' : 'border-slate-200 bg-white text-slate-400'}`}>{completed ? <Check className="size-3.5" aria-hidden="true" /> : <Icon className="size-3.5" aria-hidden="true" />}</span><span>{step.label}</span></motion.div></li>;
        })}
      </ol>
      {currentStep >= 4 ? <div className="mt-auto rounded-2xl border border-slate-200 bg-slate-50/70 p-4 text-xs"><p className="mb-3 font-semibold text-slate-900">Loan snapshot</p><div className="space-y-2.5 text-muted-foreground"><div className="flex justify-between gap-2"><span>Loan type</span><span className="font-medium text-foreground">{loanType.title}</span></div><div className="flex justify-between gap-2"><span>Amount</span><span className="font-medium text-foreground">{formatINR(application.amount)}</span></div><div className="flex justify-between gap-2"><span>Tenure</span><span className="font-medium text-foreground">{application.tenureMonths} mo</span></div><div className="flex justify-between gap-2 border-t border-slate-200 pt-2.5"><span>Est. EMI</span><span className="font-semibold text-primary">{formatINR(emi)}/mo</span></div></div></div> : null}
    </aside>
  );
}
