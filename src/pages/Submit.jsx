import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import PageShell from '../components/layout/PageShell';
import { useApplication } from '../context/ApplicationContext';
import { LOAN_TYPES, estimateEMI, formatINR } from '../data/mockData';

export default function Submit() {
  const navigate = useNavigate();
  const { application } = useApplication();
  const [consent, setConsent] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const submitTimeoutRef = useRef(null);
  const loanType = LOAN_TYPES.find((l) => l.id === application.loanTypeId) || LOAN_TYPES[0];
  const emi = estimateEMI(application.amount, loanType.rate, application.tenureMonths);

  useEffect(() => () => {
    if (submitTimeoutRef.current) clearTimeout(submitTimeoutRef.current);
  }, []);

  function handleSubmit() {
    if (!consent || submitting) return;
    setSubmitting(true);
    // simulated processing delay for the prototype
    submitTimeoutRef.current = setTimeout(() => navigate('/confirmation'), 1400);
  }

  return (
    <PageShell step={9}>
      <div className="eyebrow">Final step</div>
      <h1 style={{ fontSize: 26 }}>Confirm & submit</h1>
      <p className="subhead">Review the terms below one last time, then submit your application to Horizon Bank.</p>

      <div className="card">
        <div className="review-row"><span className="k">Loan amount</span><span className="v">{formatINR(application.amount)}</span></div>
        <div className="review-row"><span className="k">Monthly EMI</span><span className="v">{formatINR(emi)}</span></div>
        <div className="review-row"><span className="k">Interest rate</span><span className="v">{loanType.rate}% p.a.</span></div>
      </div>

      <label style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 13.5, color: 'var(--ink-soft)', marginBottom: 24, cursor: 'pointer' }}>
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          style={{ marginTop: 3 }}
        />
        I authorize Horizon Bank to verify the information provided and agree to the loan terms and conditions.
      </label>

      <div className="btn-row">
        <button className="btn btn-secondary" onClick={() => navigate('/eligibility')}>← Back</button>
        <button
          className="btn btn-primary"
          disabled={!consent || submitting}
          style={{ opacity: !consent || submitting ? 0.5 : 1, cursor: !consent || submitting ? 'not-allowed' : 'pointer' }}
          onClick={handleSubmit}
        >
          {submitting ? 'Submitting…' : 'Submit application'}
        </button>
      </div>
    </PageShell>
  );
}
