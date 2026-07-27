import { useNavigate } from 'react-router-dom';
import PageShell from '../components/layout/PageShell';
import { useApplication } from '../context/ApplicationContext';
import { LOAN_TYPES, estimateEMI, formatINR } from '../data/mockData';

export default function ReviewApplication() {
  const navigate = useNavigate();
  const { application } = useApplication();
  const loanType = LOAN_TYPES.find((l) => l.id === application.loanTypeId) || LOAN_TYPES[0];
  const emi = estimateEMI(application.amount, loanType.rate, application.tenureMonths);
  const p = application.personal;
  const emp = application.employment;

  return (
    <PageShell step={7}>
      <div className="eyebrow">Step 5 of 5 · Review</div>
      <h1 style={{ fontSize: 26 }}>Review your application</h1>
      <p className="subhead">Check everything below carefully. You can go back to fix any section before submitting.</p>

      <div className="card">
        <div className="review-section-title">Loan</div>
        <div className="review-row"><span className="k">Type</span><span className="v">{loanType.title}</span></div>
        <div className="review-row"><span className="k">Amount</span><span className="v">{formatINR(application.amount)}</span></div>
        <div className="review-row"><span className="k">Tenure</span><span className="v">{application.tenureMonths} months</span></div>
        <div className="review-row"><span className="k">Est. EMI</span><span className="v">{formatINR(emi)}</span></div>

        <div className="review-section-title">Personal</div>
        <div className="review-row"><span className="k">Name</span><span className="v">{p.fullName || '—'}</span></div>
        <div className="review-row"><span className="k">Date of birth</span><span className="v">{p.dob || '—'}</span></div>
        <div className="review-row"><span className="k">PAN</span><span className="v">{p.pan || '—'}</span></div>
        <div className="review-row"><span className="k">Mobile</span><span className="v">{p.phone || '—'}</span></div>

        <div className="review-section-title">Employment</div>
        <div className="review-row"><span className="k">Type</span><span className="v">{emp.type}</span></div>
        <div className="review-row"><span className="k">Employer</span><span className="v">{emp.employer || '—'}</span></div>
        <div className="review-row"><span className="k">Monthly income</span><span className="v">{emp.monthlyIncome ? formatINR(emp.monthlyIncome) : '—'}</span></div>
      </div>

      <div className="btn-row">
        <button className="btn btn-secondary" onClick={() => navigate('/employment')}>← Back</button>
        <button className="btn btn-primary" onClick={() => navigate('/eligibility')}>Check eligibility →</button>
      </div>
    </PageShell>
  );
}
