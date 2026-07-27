import { ArrowLeft, ArrowRight, CalendarClock, IndianRupee, ReceiptText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import PageShell from '../components/layout/PageShell';
import LoanControl from '../components/loan/LoanControl';
import LoanMetric from '../components/loan/LoanMetric';
import AnimatedNumber from '../components/motion/AnimatedNumber';
import PageHeader from '../components/shared/PageHeader';
import { MotionButton } from '../components/ui/motion-button';
import { useApplication } from '../context/ApplicationContext';
import { LOAN_TYPES, estimateEMI } from '../data/mockData';

export default function LoanDetails() {
  const navigate = useNavigate();
  const { application, updateApplication } = useApplication();
  const loanType = LOAN_TYPES.find((loan) => loan.id === application.loanTypeId) || LOAN_TYPES[0];
  const emi = estimateEMI(application.amount, loanType.rate, application.tenureMonths);
  const amountProgress = ((application.amount - 50000) / 1450000) * 100;
  const tenureProgress = ((application.tenureMonths - 12) / 48) * 100;

  return (
    <PageShell step={4}>
      <PageHeader eyebrow="Step 2 of 5 · Loan details" title="How much do you need?" description="Adjust the amount and repayment period. Your estimated EMI updates as you go." />
      <section className="loan-card" aria-label="Loan configuration">
        <LoanControl label="Loan amount" value={<>₹<AnimatedNumber value={application.amount} /></>} minLabel="₹50,000" maxLabel="₹15,00,000">
          <input className="premium-slider" style={{ '--range-progress': `${amountProgress}%` }} type="range" min="50000" max="1500000" step="10000" value={application.amount} aria-label="Loan amount" onChange={(event) => updateApplication({ amount: Number(event.target.value) })} />
        </LoanControl>
        <div className="loan-divider" />
        <LoanControl label="Repayment tenure" value={<><AnimatedNumber value={application.tenureMonths} /> months</>} minLabel="12 months" maxLabel="60 months">
          <input className="premium-slider" style={{ '--range-progress': `${tenureProgress}%` }} type="range" min="12" max="60" step="6" value={application.tenureMonths} aria-label="Repayment tenure in months" onChange={(event) => updateApplication({ tenureMonths: Number(event.target.value) })} />
        </LoanControl>
      </section>
      <section className="metric-grid" aria-label="Loan estimates">
        <LoanMetric icon={ReceiptText} label="Interest rate" value={<><AnimatedNumber value={loanType.rate} round={false} format={(value) => value.toFixed(2)} />%</>} helper="Annual percentage rate" />
        <LoanMetric icon={IndianRupee} label="Estimated EMI" value={<>₹<AnimatedNumber value={emi} /></>} helper="Estimated monthly payment" />
        <LoanMetric icon={CalendarClock} label="Total payable" value={<>₹<AnimatedNumber value={emi * application.tenureMonths} /></>} helper={`Over ${application.tenureMonths} months`} />
      </section>
      <div className="mt-7 flex items-center justify-between gap-3">
        <MotionButton type="button" variant="outline" onClick={() => navigate('/apply')}><ArrowLeft aria-hidden="true" />Back</MotionButton>
        <MotionButton type="button" onClick={() => navigate('/personal-info')}>Continue<ArrowRight aria-hidden="true" /></MotionButton>
      </div>
    </PageShell>
  );
}
