import { useNavigate } from 'react-router-dom';
import PageShell from '../components/layout/PageShell';
import { useApplication } from '../context/ApplicationContext';
import { LOAN_TYPES } from '../data/mockData';

export default function ApplyLoan() {
  const navigate = useNavigate();
  const { application, updateApplication } = useApplication();

  return (
    <PageShell step={3}>
      <div className="eyebrow">Step 1 of 5 · Apply for loan</div>
      <h1 style={{ fontSize: 26 }}>What's this loan for?</h1>
      <p className="subhead">
        Choose the option that best describes your need. This helps us match you with the right rate and repayment terms.
      </p>

      <div className="option-grid">
        {LOAN_TYPES.map((lt) => (
          <button
            type="button"
            key={lt.id}
            className={'option-card' + (application.loanTypeId === lt.id ? ' selected' : '')}
            onClick={() => updateApplication({ loanTypeId: lt.id })}
            aria-pressed={application.loanTypeId === lt.id}
          >
            <div className="title">{lt.title}</div>
            <div className="desc">{lt.desc}</div>
            <div className="desc tabular" style={{ marginTop: 8, color: 'var(--brass-deep)', fontWeight: 600 }}>
              from {lt.rate}% p.a.
            </div>
          </button>
        ))}
      </div>

      <div className="btn-row">
        <button className="btn btn-secondary" onClick={() => navigate('/dashboard')}>← Back</button>
        <button className="btn btn-primary" onClick={() => navigate('/loan-details')}>Continue →</button>
      </div>
    </PageShell>
  );
}
