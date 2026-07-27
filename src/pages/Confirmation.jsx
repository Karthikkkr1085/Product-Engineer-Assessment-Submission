import { useNavigate } from 'react-router-dom';
import PageShell from '../components/PageShell';
import { useApplication } from '../context/ApplicationContext';
import { formatINR } from '../data/mockData';

export default function Confirmation() {
  const navigate = useNavigate();
  const { application } = useApplication();
  const refCode = 'HZN-LN-' + Math.floor(100000 + Math.random() * 899999);

  return (
    <PageShell step={10}>
      <div className="confirm-wrap">
        <div className="confirm-seal">✓</div>
        <h1 style={{ fontSize: 26 }}>Application submitted</h1>
        <p className="subhead" style={{ margin: '8px auto 0' }}>
          Thank you. Your application for {formatINR(application.amount)} has been received and is being processed.
        </p>

        <div className="ref-code tabular">{refCode}</div>

        <p style={{ fontSize: 13.5, color: 'var(--ink-soft)', maxWidth: '46ch', margin: '0 auto 28px' }}>
          Keep this reference number for tracking. Funds are typically disbursed within 2 business days after
          document verification. You'll receive updates by SMS and email.
        </p>

        <button className="btn btn-primary" onClick={() => navigate('/dashboard')}>Back to dashboard</button>
      </div>
    </PageShell>
  );
}
