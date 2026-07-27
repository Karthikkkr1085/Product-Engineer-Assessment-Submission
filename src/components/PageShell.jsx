import LedgerRail from './LedgerRail';

export default function PageShell({ step, children }) {
  return (
    <div className="app-shell">
      <LedgerRail currentStep={step} />
      <main className="main">
        <div className="content">{children}</div>
      </main>
    </div>
  );
}
