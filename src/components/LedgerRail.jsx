import { STEPS } from '../data/steps';
import { useApplication } from '../context/ApplicationContext';
import { LOAN_TYPES, estimateEMI, formatINR } from '../data/mockData';

export default function LedgerRail({ currentStep }) {
  const { application } = useApplication();
  const loanType = LOAN_TYPES.find((l) => l.id === application.loanTypeId) || LOAN_TYPES[0];
  const emi = estimateEMI(application.amount, loanType.rate, application.tenureMonths);
  const showLedger = currentStep >= 4;

  return (
    <aside className="rail">
      <div className="rail-brand">
        <span className="mark" />
        <span className="name">Horizon</span>
        <span className="tag">Bank</span>
      </div>

      <ul className="rail-steps">
        {STEPS.map((s) => (
          <li
            key={s.n}
            className={
              'rail-step ' +
              (s.n === currentStep ? 'active' : s.n < currentStep ? 'done' : '')
            }
          >
            <span className="num">{s.n < currentStep ? '✓' : s.n}</span>
            <span className="label">{s.label}</span>
          </li>
        ))}
      </ul>

      {showLedger && (
        <div className="ledger-strip">
          <div className="row">
            <span>Loan type</span>
            <span className="val">{loanType.title}</span>
          </div>
          <div className="row">
            <span>Amount</span>
            <span className="val">{formatINR(application.amount)}</span>
          </div>
          <div className="row">
            <span>Tenure</span>
            <span className="val">{application.tenureMonths} mo</span>
          </div>
          <div className="row total">
            <span>Est. EMI</span>
            <span className="val">{formatINR(emi)}/mo</span>
          </div>
        </div>
      )}
    </aside>
  );
}
