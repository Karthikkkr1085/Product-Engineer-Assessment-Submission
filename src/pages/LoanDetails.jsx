import { useNavigate } from 'react-router-dom';
import PageShell from '../components/PageShell';
import { useApplication } from '../context/ApplicationContext';
import { LOAN_TYPES, estimateEMI, formatINR } from '../data/mockData';

export default function LoanDetails() {
  const navigate = useNavigate();
  const { application, updateApplication } = useApplication();
  const loanType = LOAN_TYPES.find((l) => l.id === application.loanTypeId) || LOAN_TYPES[0];
  const emi = estimateEMI(application.amount, loanType.rate, application.tenureMonths);

  return (
    <PageShell step={4}>
      <div className="eyebrow">Step 2 of 5 · Loan details</div>
      <h1 style={{ fontSize: 26 }}>How much do you need?</h1>
      <p className="subhead">Adjust the amount and repayment period. Your estimated EMI updates as you go.</p>

      <div className="card">
        <div className="slider-block">
          <div className="hint" style={{ marginBottom: 6 }}>Loan amount</div>
          <div className="slider-amount">{formatINR(application.amount)}</div>
          <input
            type="range"
            min="50000"
            max="1500000"
            step="10000"
            value={application.amount}
            onChange={(e) => updateApplication({ amount: Number(e.target.value) })}
          />
          <div className="slider-labels">
            <span>₹50,000</span>
            <span>₹15,00,000</span>
          </div>
        </div>

        <div className="slider-block">
          <div className="hint" style={{ marginBottom: 6 }}>Repayment tenure</div>
          <div className="slider-amount">{application.tenureMonths} months</div>
          <input
            type="range"
            min="12"
            max="60"
            step="6"
            value={application.tenureMonths}
            onChange={(e) => updateApplication({ tenureMonths: Number(e.target.value) })}
          />
          <div className="slider-labels">
            <span>12 mo</span>
            <span>60 mo</span>
          </div>
        </div>
      </div>

      <div className="stat-grid">
        <div className="stat-box">
          <div className="label">Interest rate</div>
          <div className="value">{loanType.rate}%</div>
        </div>
        <div className="stat-box">
          <div className="label">Estimated EMI</div>
          <div className="value">{formatINR(emi)}</div>
        </div>
        <div className="stat-box">
          <div className="label">Total payable</div>
          <div className="value">{formatINR(emi * application.tenureMonths)}</div>
        </div>
      </div>

      <div className="btn-row">
        <button className="btn btn-secondary" onClick={() => navigate('/apply')}>← Back</button>
        <button className="btn btn-primary" onClick={() => navigate('/personal-info')}>Continue →</button>
      </div>
    </PageShell>
  );
}
