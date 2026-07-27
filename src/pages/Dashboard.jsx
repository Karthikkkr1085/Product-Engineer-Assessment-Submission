import { useNavigate } from 'react-router-dom';
import PageShell from '../components/layout/PageShell';
import { MOCK_USER, ACCOUNT_SUMMARY, formatINR } from '../data/mockData';

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <PageShell step={2}>
      <div className="dash-header">
        <div>
          <div className="eyebrow">Account overview</div>
          <h1 style={{ fontSize: 28 }}>Good afternoon, {MOCK_USER.name.split(' ')[0]}</h1>
          <p className="subhead" style={{ marginBottom: 0 }}>
            Account {MOCK_USER.accountNumber} · Credit score {MOCK_USER.creditScore}
          </p>
        </div>
      </div>

      <div className="dash-cards">
        <div className="dash-card">
          <div className="label">Savings balance</div>
          <div className="value">{formatINR(ACCOUNT_SUMMARY.savingsBalance)}</div>
        </div>
        <div className="dash-card">
          <div className="label">Active loans</div>
          <div className="value">{ACCOUNT_SUMMARY.activeLoans}</div>
        </div>
        <div className="dash-card">
          <div className="label">Pre-approved limit</div>
          <div className="value">{formatINR(ACCOUNT_SUMMARY.creditLimit)}</div>
        </div>
      </div>

      <div className="cta-banner">
        <div>
          <h3>Need funds for something important?</h3>
          <p>You're pre-approved for a personal loan up to {formatINR(ACCOUNT_SUMMARY.creditLimit)}.</p>
        </div>
        <button className="btn btn-primary" style={{ background: 'var(--brass)', color: 'var(--ink)' }} onClick={() => navigate('/apply')}>
          Apply for a loan →
        </button>
      </div>
    </PageShell>
  );
}
