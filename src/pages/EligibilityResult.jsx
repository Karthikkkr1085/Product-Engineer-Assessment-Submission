import { useNavigate } from 'react-router-dom';
import PageShell from '../components/PageShell';
import { useApplication } from '../context/ApplicationContext';
import { LOAN_TYPES, estimateEMI, formatINR, MOCK_USER } from '../data/mockData';

export default function EligibilityResult() {
  const navigate = useNavigate();
  const { application } = useApplication();
  const loanType = LOAN_TYPES.find((l) => l.id === application.loanTypeId) || LOAN_TYPES[0];
  const emi = estimateEMI(application.amount, loanType.rate, application.tenureMonths);

  return (
    <PageShell step={8}>
      <div className="eyebrow">Instant decision</div>
      <h1 style={{ fontSize: 26 }}>You're eligible</h1>
      <p className="subhead">
        Based on your credit score of {MOCK_USER.creditScore} and the income details provided, Horizon Bank can offer you the following.
      </p>

      <div className="result-banner approved">
        <div className="icon">✓</div>
        <div>
          <div className="amount">{formatINR(application.amount)}</div>
          <div style={{ fontSize: 13, color: 'var(--ink-soft)' }}>Approved loan amount</div>
        </div>
      </div>

      <div className="stat-grid">
        <div className="stat-box">
          <div className="label">Interest rate</div>
          <div className="value">{loanType.rate}%</div>
        </div>
        <div className="stat-box">
          <div className="label">Monthly EMI</div>
          <div className="value">{formatINR(emi)}</div>
        </div>
        <div className="stat-box">
          <div className="label">Tenure</div>
          <div className="value">{application.tenureMonths} mo</div>
        </div>
      </div>

      <div className="card" style={{ fontSize: 13, color: 'var(--ink-soft)' }}>
        This offer is valid for 7 days and is subject to final document verification. No further paperwork is needed to proceed — just confirm below.
      </div>

      <div className="btn-row">
        <button className="btn btn-secondary" onClick={() => navigate('/review')}>← Back</button>
        <button className="btn btn-primary" onClick={() => navigate('/submit')}>Accept & continue →</button>
      </div>
    </PageShell>
  );
}
